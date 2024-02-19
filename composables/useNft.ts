import {
  erc20ABI,
  readContract,
  getAccount,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import coffeeABI from "../abis/coffee.json";
import usdcABI from "../abis/erc20.json";
import { onMounted, ref } from "vue";
import { Hex, formatEther } from "viem";

const nftContractAddress = (process.env.NFT_CONTRACT_ADDRESS ||
  "0x5Bf7D89f53A935373aE7CB257dD8D45C07f4D343") as Hex;

const nftBalance = ref();

export const useNftDetails = () => {
  const erc20TokenAddress = ref();
  const nftPrice = ref();
  const nftSymbol = ref();
  const mintingNft = ref(false);
  const redeemingNft = ref(false);
  const toast = useToast();

  const { address: userAddress } = getAccount();

  async function getNftBalance() {
    if (!userAddress) {
      console.error("user address not provided");
      return;
    }

    try {
      const balance = await readContract({
        abi: coffeeABI,
        address: nftContractAddress,
        functionName: "balanceOf",
        args: [userAddress],
      });

      console.log("Balance:", balance);
      nftBalance.value = balance ? balance : 0;
    } catch (error) {
      console.error("Error getting nft balance", error);
    }
  }

  async function mintNFT(quantity: number) {
    if (!userAddress || !userAddress) {
      console.error("No user address provided");
      return;
    }

    mintingNft.value = true;
    try {
      const totalPrice = BigInt(nftPrice.value) * BigInt(quantity);

      const currentAllowance = await readContract({
        abi: erc20ABI,
        address: erc20TokenAddress.value as Hex,
        functionName: "allowance",
        args: [userAddress, nftContractAddress],
      });

      if (BigInt(currentAllowance) < totalPrice) {
        const approvalTransaction = await writeContract({
          abi: erc20ABI,
          address: erc20TokenAddress.value as Hex,
          functionName: "approve",
          args: [nftContractAddress, BigInt(totalPrice)],
        });

        await waitForTransaction(approvalTransaction);
      }

      // mint
      const mintedToken = await writeContract({
        abi: coffeeABI,
        address: nftContractAddress,
        functionName: "mintToken",
        args: [quantity.toString()],
      });

      await waitForTransaction(mintedToken);
    } finally {
      mintingNft.value = false;
      toast.add({
        title: "Mint successful!",
        icon: "i-heroicons-check-circle",
        description: `You now have ${quantity} more COFFs in your account!`,
      });

      getNftBalance();
    }
  }

  async function redeemNFT(quantity: number) {
    redeemingNft.value = true;
    let collateralSymbol;
    try {
      const redeemTransaction = await writeContract({
        abi: coffeeABI,
        address: nftContractAddress,
        functionName: "redeemToken",
        args: [quantity],
      });

      await waitForTransaction(redeemTransaction);
      console.log("Redeem ok");

      collateralSymbol = await readContract({
        abi: usdcABI,
        address: erc20TokenAddress.value as Hex,
        functionName: "symbol",
      });

      return redeemTransaction;
    } catch (error) {
      console.error("Error redeeming nfts", error);
    } finally {
      redeemingNft.value = false;

      toast.add({
        title: "Redeem successful!",
        icon: "i-heroicons-check-circle",
        description: `You redeemed ${quantity} COFFs from your account and received ${
          quantity * Number(formatEther(nftPrice.value))
        } ${collateralSymbol}!`,
      });
      await getNftBalance();
    }
  }

  async function transferNFT(quantity: number, newOwner: string) {
    try {
      const transferTransaction = await writeContract({
        abi: coffeeABI,
        address: nftContractAddress,
        functionName: "transferToken",
        args: [quantity, newOwner],
      });
      await waitForTransaction(transferTransaction);
      console.log("Transfer ok");
    } catch (error) {
      console.error("Error transferring nfts", error);
    } finally {
      await getNftBalance();
    }
  }

  onMounted(async () => {
    erc20TokenAddress.value = await readContract({
      abi: coffeeABI,
      address: nftContractAddress,
      functionName: "erc20Token",
    });

    nftPrice.value = await readContract({
      abi: coffeeABI,
      address: nftContractAddress,
      functionName: "mintPrice",
    });

    nftSymbol.value = await readContract({
      abi: coffeeABI,
      address: nftContractAddress,
      functionName: "symbol",
    });

    nftBalance.value = await readContract({
      abi: coffeeABI,
      address: nftContractAddress,
      functionName: "balanceOf",
      args: [userAddress],
    });
  });

  return {
    erc20TokenAddress,
    getNftBalance,
    nftBalance,
    nftContractAddress,
    nftPrice,
    nftSymbol,
    mintNFT,
    mintingNft,
    transferNFT,
    redeemNFT,
    redeemingNft,
  };
};

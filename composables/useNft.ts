import {
  erc20ABI,
  readContract,
  getAccount,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import coffeeABI from "../abis/coffee.json";
import { onMounted, ref } from "vue";
import { Hex } from "viem";

const coffeContractAddress = "0x65Fe8c75Ed4B2e50D4E5E4CEdB2914a5ee7a0846";

export const useNftDetails = () => {

  const collateralSymbol = ref();
  const erc20TokenAddress = ref();
  const nftPrice = ref();
  const nftSymbol = ref();
  const mintingNft = ref(false);

  const { address } = getAccount();

  async function mintNFT(quantity: number) {
    mintingNft.value = true;
    try {
      const currentAllowance = await readContract({
        abi: erc20ABI,
        address: erc20TokenAddress.value as Hex,
        functionName: "allowance",
        args: [address, coffeContractAddress],
      });
  
      if (BigInt(currentAllowance) < BigInt(quantity)) {
        // approve
        const approvalTransaction = await writeContract({
          abi: erc20ABI,
          address: erc20TokenAddress.value as Hex,
          functionName: "approve",
          args: [coffeContractAddress, BigInt(quantity)],
        });
  
        await waitForTransaction(approvalTransaction);
      }
  
      // mint
      await writeContract({
        abi: coffeeABI,
        address: coffeContractAddress,
        functionName: "mintToken",
        args: [quantity.toString()],
      });
  
    } finally {
      mintingNft.value = false;
    }

    
  }

  async function redeemNFT(tokenIds) {
    try {
      const redeemTransaction = await writeContract({
        abi: coffeeABI,
        address: coffeContractAddress,
        functionName: "redeemToken",
        args: [tokenIds],
      });
      await waitForTransaction(redeemTransaction);
      console.log("Redeem ok");
    } catch (error) {
      console.error("Error redeeming nsfts", error);
    }
  }

  async function transferNFT(tokenIds: String[], newOwner: Hex) {
    try {
      const swapTransaction = await writeContract({
        abi: coffeeABI,
        address: coffeContractAddress,
        functionName: "swapToken",
        args: [tokenIds, newOwner],
      });
      await waitForTransaction(swapTransaction);
      console.log("Swap ok");
    } catch (error) {
      console.error("Error swapping nsfts", error);
    }
  }

  onMounted(async () => {
    erc20TokenAddress.value = await readContract({
      abi: coffeeABI,
      address: coffeContractAddress,
      functionName: "erc20Token",
    });

    nftPrice.value = await readContract({
      abi: coffeeABI,
      address: coffeContractAddress,
      functionName: "mintPrice",
    });

    nftSymbol.value = await readContract({
      abi: coffeeABI,
      address: coffeContractAddress,
      functionName: "symbol",
    });
  });

  return {
    erc20TokenAddress,
    collateralSymbol,
    nftPrice,
    nftSymbol,
    mintNFT,
    mintingNft,
    transferNFT,
  };
};

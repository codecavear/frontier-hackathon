import {
  erc20ABI,
  readContract,
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

  async function approveERC20(userAddress, quantity) {
    try {
      const currentAllowance = await readContract({
        abi: erc20ABI,
        address: erc20TokenAddress.value as Hex,
        functionName: "allowance",
        args: [userAddress, coffeContractAddress],
      });

      if (BigInt(currentAllowance) < BigInt(quantity)) {
        const approvalTransaction = await writeContract({
          abi: erc20ABI,
          address: erc20TokenAddress.value as Hex,
          functionName: "approve",
          args: [coffeContractAddress, quantity.toString()],
        });
        await waitForTransaction(approvalTransaction);

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error checking ERC20 allowance", error);
      throw error;
    }
  }

  async function mintNFT(quantity: number) {
    await writeContract({
      abi: coffeeABI,
      address: coffeContractAddress,
      functionName: "mintToken",
      args: [quantity.toString()],
    });
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

  async function swapNFT(tokenIds, newOwner) {
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
    approveERC20,
    mintNFT,
  };
};

import { ref, watch } from "vue";
import { useNftDetails } from "./useNft";
import { readContract, getAccount } from "@wagmi/core";
import usdcABI from "../abis/erc20.json";

export const useCollateralDetails = () => {
  const balance = ref();
  const symbol = ref();

  const { erc20TokenAddress } = useNftDetails();
  const { address: userAddress } = getAccount();

  watch(
    () => erc20TokenAddress.value,
    async(newValue) => {
        balance.value = await readContract({
            abi: usdcABI,
            address: newValue,
            functionName: "balanceOf",
            args: [userAddress],
          });
    }
  );

  return {
    address: erc20TokenAddress,
    balance,
    symbol,
  };
};

import { onMounted, ref, watch } from "vue";
import { useNftDetails } from "./useNft";
import { readContract, getAccount } from "@wagmi/core";
import usdcABI from "../abis/erc20.json";

export const useCollateralDetails = () => {
  const balance = ref();
  const symbol = ref();

  const { erc20TokenAddress } = useNftDetails();
  const { address: userAddress } = getAccount();

  onMounted(async() => {
    if(!balance.value){
      getCollateralBalance()
    }
  })

  watch(
    () => erc20TokenAddress.value,
    async() => {
       getCollateralBalance()
    }
  );

  async function getCollateralBalance(){
    if(!userAddress || !erc20TokenAddress.value) return;
    balance.value = await readContract({
      abi: usdcABI,
      address: erc20TokenAddress.value,
      functionName: "balanceOf",
      args: [userAddress],
    });
  }

  return {
    address: erc20TokenAddress,
    balance,
    symbol,
    getCollateralBalance
  };
};

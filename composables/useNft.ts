import { readContract } from "@wagmi/core";
import coffeeABI from "../abis/coffee.json";
import { onMounted, ref } from "vue";

const coffeContractAddress = "0x65Fe8c75Ed4B2e50D4E5E4CEdB2914a5ee7a0846";

export const useNftDetails = () => {

  const collateralSymbol = ref();
  const erc20TokenAddress = ref();
  const nftPrice = ref();
  const nftSymbol = ref();


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

    nftSymbol.value =await readContract({
      abi: coffeeABI,
      address: coffeContractAddress,
      functionName: "symbol",
    });
  })

  return {
    erc20TokenAddress,
    collateralSymbol,
    nftPrice,
    nftSymbol
  }
}

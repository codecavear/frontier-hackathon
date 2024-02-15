import { ref, watch } from "vue";
import { useNftDetails } from "./useNft";

export const useCollateralDetails = () => {
  const balance = ref();
  const symbol = ref();

  const { erc20TokenAddress } = useNftDetails();

  watch(
    () => erc20TokenAddress.value,
    (newValue) => {}
  );

  return {
    address: erc20TokenAddress,
    balance,
    symbol,
  };
};

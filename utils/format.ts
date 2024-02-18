import { formatEther } from "viem";

export const formatFromEther = (value: bigint | number) => {
  try {
    return parseFloat(formatEther(BigInt(value))).toFixed(2);
  } catch (error) {
    return 0;
  }
};

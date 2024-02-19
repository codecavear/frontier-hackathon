import { formatEther } from "viem";

export const formatFromEther = (value: bigint | number) => {
  try {
    return formatEther(BigInt(value));
  } catch (error) {
    return 0;
  }
};

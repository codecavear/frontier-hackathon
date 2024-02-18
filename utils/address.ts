import { Hash } from "viem";

export const shortenAddress = (address: Hash, chars = 4): string => {
  return `${address.substring(0, chars + 2)}...${address.substring(
    address.length - chars
  )}`;
}
import { writeContract, waitForTransaction } from "@wagmi/core";

import usdcABI from "../abis/erc20.json";
import coffeeABI from "../abis/coffee.json";

const coffeContractAddress = "0x65Fe8c75Ed4B2e50D4E5E4CEdB2914a5ee7a0846";

async function approveERC20(
  quantity: number,
  erc20TokenAddress: any,
  nftPrice: any
) {
  const parseNftPriceBigNumber = BigInt(nftPrice.toString());
  const parseQuantityBigNumber = BigInt(quantity.toString());

  const totalPriceWei = (
    parseNftPriceBigNumber * parseQuantityBigNumber
  ).toString();

  console.log(68, totalPriceWei);
  console.log(70, coffeContractAddress);


  try {
    const allowTransaction = await writeContract({
      abi: usdcABI,
      address: erc20TokenAddress.value,
      functionName: "approve",
      args: [coffeContractAddress, totalPriceWei],
    });

    await waitForTransaction(allowTransaction);

    return true;
  } catch (error) {
    console.error("Error approve ERC20", error);
    return false;
  }
}

async function mintNFT(quantity) {
  await writeContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "mintToken",
    args: [quantity.toString()],
  });
}

async function executeMint(
  quantity,
  erc20TokenAddress,

  nftPrice
) {
  console.log(69, erc20TokenAddress)
  if (
    !erc20TokenAddress ||
    !coffeContractAddress ||
    !nftPrice ||
    quantity === undefined
  ) {
    console.error("One or more params are missing");
    return;
  }
  const isApproval = await approveERC20(quantity, erc20TokenAddress, nftPrice);
  if (isApproval) {
    await mintNFT(quantity);
    console.log("Mint executed ok");
  } else {
    console.log("ERC20 approval failed");
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

export { executeMint, redeemNFT, swapNFT };

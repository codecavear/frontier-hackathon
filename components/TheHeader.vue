<template>
  <header class="fixed w-full">
    <div
      class="inset-x-0 bottom-0 container mx-auto flex justify-between items-center px-2 py-2 bg-transparent"
    >
      <h1 class="text-white text-2xl font-bold">Frontier Hackathon</h1>
      <UKbd class="flex gap-2 items-center py-1 px-2" size="lg">
        {{ nftBalance }} <UIcon dynamic name="i-bx-coffee-togo"
      /></UKbd>
      <ConnectWallet />
    </div>
  </header>
</template>
<script setup>

import { readContract, getAccount } from "@wagmi/core";
import coffeeABI from "@/abis/coffee.json";

const account = getAccount();
const nftBalance = ref("");
const coffeContractAddress = "0x693e0c4A55D4d2CC28F63AB2A3a3d8749dB2e781";

async function getNftBalance() {
  nftBalance.value = await readContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "balanceOf",
    args: [account.address],
  });
}

onMounted(async () => {
  getNftBalance();
});
</script>
<style scoped>
 /* .bg-translucid 
  {
  background-color: red;    
  } */

</style>
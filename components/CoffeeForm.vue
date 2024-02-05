<template>
  <UCard class="w-[400px] max-w-full cardF">
    <template #header>
      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-2">
          <UBadge color="gray" size="lg" variant="solid">Buy</UBadge>
          <UBadge color="gray" size="lg" variant="solid">Spend</UBadge>
          <UBadge color="gray" size="lg" variant="solid">Sell</UBadge>
        </div>
        <div>
          <h1 class="text-xl">
            1 {{ nftSymbol }} = {{ formatEther(nftPrice) }}
            {{ collateralSymbol }}
          </h1>
        </div>
      </div>
    </template>

    <div class="flex justify-center items-center">
      <div>
        <UButton
          @click="removeOneCoffe()"
          icon="i-heroicons-minus"
          size="md"
          :ui="{ rounded: 'rounded-full' }"
          color="indigo"
          variant="outline"
        ></UButton>
      </div>
      <div class="flex flex-col items-center px-6">
        <h2>Quantity</h2>
        <h1 class="text-8xl">{{ quantity }}</h1>
      </div>
      <div>
        <UButton
          @click="addOneCoffe()"
          icon="i-heroicons-plus"
          size="md"
          :ui="{ rounded: 'rounded-full' }"
          color="indigo"
          variant="outline"
        ></UButton>
      </div>
    </div>

    <template #footer>
      <div class="flex flex-col">
        <div class="flex justify-between items-center">
          <h1>Total:</h1>
          <h1 class="text-lg">
            {{ formatEther(nftPrice) }} {{ collateralSymbol }}
          </h1>
        </div>
        <UButton
          color="orange"
          variant="soft"
          size="lg"
          label="Buy"
          block
          @click="mintNFT()"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { readContract, writeContract } from "@wagmi/core";
import { formatEther } from "viem";
import usdcABI from "@/abis/usdc.json";
import coffeeABI from "@/abis/coffee.json";

const usdcContractAddress = "0x36F7caa6bEE589Ed6B24Dfa7A59f929cFeb2848e";
const coffeContractAddress = "0x693e0c4A55D4d2CC28F63AB2A3a3d8749dB2e781";

const collateralSymbol = ref("");
const nftSymbol = ref("");
const nftPrice = ref("");
const quantity = ref(0);

function addOneCoffe() {
  quantity.value += 1;
}
function removeOneCoffe() {
  if (quantity.value === 0) return;
  quantity.value -= 1;
}

async function mintNFT() {
  const result = await writeContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "mintToken",
  });
}
onMounted(async () => {
  collateralSymbol.value = await readContract({
    abi: usdcABI,
    address: usdcContractAddress,
    functionName: "symbol",
  });

  nftSymbol.value = await readContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "symbol",
  });

  nftPrice.value = await readContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "mintPrice",
  });
});
</script>

<style scoped>
.cardF {
    background: linear-gradient(to top, rgb(18, 18, 18) 10.6%, rgb(0, 0, 0) 97.7%); 
   }
</style>

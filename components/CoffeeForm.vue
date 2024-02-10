<template>
  <UCard class="w-[400px] max-w-full cardF">
    <template #header>
      <SpendModal v-model="spendModalOpen" />
      <UTabs @change="onTabsChange" :ui="{ list: {tab: { active: 'bg-[#3d170b]' }}}" :items="tabsItems" />
    </template>

    <div class="flex justify-center items-center">
      <div>
        <UButton
          @click="removeOneCoffe()"
          icon="i-heroicons-minus"
          size="md"
          :ui="{ rounded: 'rounded-full' }"
          color="orange"
          variant="soft"
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
          color="orange"
          variant="soft"
        ></UButton>
      </div>
    </div>

    <div class="flex justify-center my-4">
      <UKbd>
        1 {{ nftSymbol }} = {{ formatEther(nftPrice) }}
        {{ collateralSymbol }}</UKbd
      >
    </div>

    <template #footer>
      <div class="flex flex-col">
        <div class="flex justify-between items-center uppercase text-xs my-2">
          <span>Total:</span>
          <span>
            {{ formatEther(nftPrice) * quantity }} {{ collateralSymbol }}
          </span>
        </div>
        <UButton
          color="orange"
          variant="soft"
          size="lg"
          label="Buy"
          block
          @click="mintNFT(quantity)"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { readContract, writeContract } from "@wagmi/core";
import { formatEther } from "viem";
import usdcABI from "@/abis/erc20.json";
import coffeeABI from "@/abis/coffee.json";
import { computed } from "vue";

const coffeContractAddress = "0x65Fe8c75Ed4B2e50D4E5E4CEdB2914a5ee7a0846";

const collateralSymbol = ref("");
const nftSymbol = ref("");
const nftPrice = ref("");
const quantity = ref(1);
const erc20TokenAddress = ref("");
const nftQuantiy = ref(0);
const spendModalOpen = ref(true)

const tabsItems = computed(() => [
  {
    label: "Buy",
  },
  {
    label: "Spend",

  },
  {
    label: "Redeem",
    disabled: true,
  },
]);


function addOneCoffe() {
  quantity.value += 1;
}
function removeOneCoffe() {
  if (quantity.value === 0) return;
  quantity.value -= 1;
}

async function mintNFT(quantity) {
  console.log(quantity);
  await writeContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "mintToken",
    args: [quantity.toString()],
  });
}

function onTabsChange (index) {
  const item = tabsItems.value[index]
  if(item.label === 'Spend') spendModalOpen.value = true
  console.log(item)
}

onMounted(async () => {
  erc20TokenAddress.value = await readContract({
    abi: coffeeABI,
    address: coffeContractAddress,
    functionName: "erc20Token",
  });

  collateralSymbol.value = await readContract({
    abi: usdcABI,
    address: erc20TokenAddress.value,
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
  background: linear-gradient(
    to top,
    rgb(18, 18, 18) 10.6%,
    rgb(0, 0, 0) 97.7%
  );
}
</style>

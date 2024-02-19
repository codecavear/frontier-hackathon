<template>
  <UCard class="w-[400px] max-w-full cardF">

    <div class="flex">
      <UTabs
      @change="onTabsChange"
      :ui="{ list: { tab: { active: 'bg-transparent' }, background: 'dark:bg-transparent', marker: { background: 'dark:bg-transparent'} } }"
      :items="tabsItems"
    />
    </div>

    <div class="flex justify-center items-center mt-4">
      <div>
        <UButton
          @click="removeOneCoffe()"
          icon="i-heroicons-minus"
          size="xl"
          :ui="{ rounded: 'rounded-full' }"
          color="transparent"
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
          size="xl"
          :ui="{ rounded: 'rounded-full' }"
          color="transparent"
          variant="soft"
        ></UButton>
      </div>
    </div>

    <!-- <div class="flex justify-center my-4">
      <UKbd>
        1 {{ collateralSymbol }} = {{ formatFromEther(nftPrice) }}
        {{ nftSymbol }}</UKbd
      >
    </div> -->

    <template #footer>
      <div class="flex flex-col">
        <div class="flex justify-between items-center uppercase text-xs my-2">
          <span>Total:</span>
          <span>
            {{ formatFromEther(quantity * Number(nftPrice)) }}
            {{ collateralSymbol }}
          </span>
        </div>
        <UButton
          variant="soft"
          size="lg"
          label="Buy"
          block
          @click="mintNFT(quantity)"
          :loading="mintingNft"
        />
      </div>
    </template>
      <SpendModal v-model="spendModalOpen" />
  </UCard>
</template>

<script setup lang="ts">
const { nftBalance, nftPrice, nftSymbol, mintNFT, mintingNft } = useNftDetails();
const { symbol: collateralSymbol } = useCollateralDetails();

const quantity = ref(1);
const spendModalOpen = ref(false);

console.log(nftBalance)

const tabsItems = computed(() => [
  {
    label: "Buy",
  },
  {
    label: "Spend",
    disabled: !nftBalance.value
  },
]);

function addOneCoffe() {
  quantity.value += 1;
}
function removeOneCoffe() {
  if (quantity.value === 0) return;
  quantity.value -= 1;
}

function onTabsChange(index) {
  const item = tabsItems.value[index];
  if (item.label === "Spend") spendModalOpen.value = true;
}
</script>

<style scoped>
.cardF {
  background: linear-gradient(
    to top,
    rgb(18, 18, 18, 0.2) 10.6%,
    rgb(0, 0, 0, 0.2) 97.7%
  );
}
</style>

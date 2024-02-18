<template>
  <UCard class="w-[400px] max-w-full cardF">
    <template #header>
      <SpendModal v-model="spendModalOpen" />
      <UTabs
        @change="onTabsChange"
        :ui="{ list: { tab: { active: 'bg-[#3d170b]' } } }"
        :items="tabsItems"
      />
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
      <UKbd> 1 {{ collateralSymbol }} = {{ nftPrice }} {{ nftSymbol }}</UKbd>
    </div>

    <template #footer>
      <div class="flex flex-col">
        <div class="flex justify-between items-center uppercase text-xs my-2">
          <span>Total:</span>
          <span>
            {{ erc20TokenAddress }}
          </span>
        </div>
        <UButton
          color="orange"
          variant="soft"
          size="lg"
          label="Buy"
          block
          @click="executeMint(quantity, erc20TokenAddress, nftPrice)"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { computed } from "vue";

const { collateralSymbol, erc20TokenAddress, nftPrice, nftSymbol } =
  useNftDetails();

const { address, balance, symbol } = useCollateralDetails();

const quantity = ref(1);
const spendModalOpen = ref(false);

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

function onTabsChange(index) {
  const item = tabsItems.value[index];
  if (item.label === "Spend") spendModalOpen.value = true;
}
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

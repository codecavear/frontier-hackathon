<template>
  <UContainer class="justify-center flex py-4">
    <UCard class="size-1/3">
      <template #header>
        <UContainer class="flex flex-col items-center">
          <h1 class="text-2xl">Buy coffe</h1>
          <h3>One coffe = 1.5 ETH</h3>
        </UContainer>
      </template>

      <div class="flex justify-center items-center pb-4">
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
      <div>
        <UFormGroup label="Dirección de PINTA - Polygon">
          <UInput placeholder="Enter your addres" v-model="value" />
        </UFormGroup>
        <ULink inactive-class="text-primary"> I dont have a wallet </ULink>
      </div>

      <template #footer>
        <div class="flex justify-between items-center">
          <h1>Total:</h1>
          <h1 class="text-2xl">{{ total }}</h1>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
const quantity = ref(0);
const value = ref("");
const total = computed(() => {
  return quantity.value * 100;
});

function addOneCoffe() {
  quantity.value += 1;
}
function removeOneCoffe() {
  if (quantity.value === 0) return;
  quantity.value -= 1;
}
</script>

<style lang="scss" scoped></style>

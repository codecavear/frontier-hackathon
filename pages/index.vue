<template>
  <UContainer>
    <UCard>
      <template #header>
        <UContainer class="flex flex-col items-center">
          <h1>Buy coffe</h1>
          <h3>One coffe = 1.5 ETH</h3>
        </UContainer>
      </template>

      <UContainer class="flex justify-center gap-4">
        <UButton
          @click="removeOneCoffe()"
          icon="i-heroicons-minus"
          size="md"
          :ui="{ rounded: 'rounded-full' }"
          color="indigo"
          variant="outline"
        ></UButton>
        <div flex items-center>
          <h2>Quantity</h2>
          <h1>{{ quantity }}</h1>
        </div>
        <UButton
          @click="addOneCoffe()"
          icon="i-heroicons-plus"
          size="md"
          :ui="{ rounded: 'rounded-full' }"
          color="indigo"
          variant="outline"
        ></UButton>
      </UContainer>

      <UFormGroup label="Dirección de PINTA - Polygon">
        <UInput placeholder="Enter your addres" v-model="value" />
      </UFormGroup>

      <template #footer>
        <h1>Total: {{}}</h1>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
const quantity = ref(0);
const value = ref("");
const total = ref(quantity.value * 100);

function addOneCoffe() {
  quantity.value += 1;
}
function removeOneCoffe() {
  if (quantity.value === 0) return;
  quantity.value -= 1;
}
</script>

<style lang="scss" scoped></style>

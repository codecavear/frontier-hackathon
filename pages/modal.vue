<template>
  <div>
    <div class="justify-center text-center items-center mt-20">
      <UButton size="xl" label="Open" @click="isOpen = true" />
    </div>
    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <h1 class="text-2xl">Spend your COFF</h1>
        </template>

        <div class="gap-4 flex flex-col text-center">
         
            <img class="h-[40vh]" src="../public/img/qrimage.png" alt="" />
          
          <UInput placeholder="Search..." />
          <UInput placeholder="Search..." />
        </div>
        <template #footer>
          <UButton
            block
            label="Spend"
            color="orange"
            variant="soft"
            size="lg"
          />
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false);
</script>

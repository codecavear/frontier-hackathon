<template>
  <UModal v-model="props.isOpen">
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
        <UButton block label="Spend" color="orange" variant="soft" size="lg" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps(['isOpen'])
const emit = defineEmits(['update:isOpen'])
</script>

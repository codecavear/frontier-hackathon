<template>
  <UModal v-model="props.isOpen">
    <UCard :ui="{
      ring: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
    }">
      <template #header>
        <h1 class="text-2xl">Spend your COFF</h1>
      </template>

      <div class="gap-4 flex flex-col text-center">
        <!-- QR -->
        <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
      </div>
      <template #footer>
        <UButton block label="Spend" color="orange" variant="soft" size="lg" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { StreamBarcodeReader } from "vue-barcode-reader";


const props = defineProps(['isOpen'])
const emit = defineEmits(['update:isOpen'])

const onDecode = (code: any) => {
  console.log(`Decode text from QR code is ${code}`)
};

const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`)
}
</script>

<template>
  <UModal v-model="props.isOpen">
    <UCard :ui="{
      ring: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
    }">
      <template #header>
        <h1 class="text-2xl">Spend your COFF</h1>
      </template>

      <div class="gap-4 flex flex-col">
        <!-- QR -->
        <qrcode-stream @detect="onDetect"></qrcode-stream>
        <div>
          <label>Store address</label>
          <UInput label="Store address" v-model="toAddress"></UInput>
        </div>
      </div>
      <template #footer>
        <UButton block label="Spend" color="orange" variant="soft" size="lg" @click="transferNFT(quantity, toAddress)" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader'

const { transferNFT } = useNftDetails();

const props = defineProps(["isOpen"]);
const emit = defineEmits(["update:isOpen"]);

const toAddress = ref("")
const quantity = ref(0);

const onDetect = (detectedCodes: any) => {
  toAddress.value = detectedCodes[0].rawValue;
};
</script>

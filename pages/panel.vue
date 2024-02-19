<template>
  <div>
    <UContainer class="grid grid-cols-4 h-screen cardC pt-24">
      <div class="col-span-3">
        <h3 class="text-gray-400 text-xl uppercase">Pending orders:</h3>
      </div>

      <div class="flex flex-col gap-8">
        <UCard class="glass-card">
          <template #header>QR Code</template>
          <div v-if="userAddress" class="flex justify-center">
            <QRCodeVue3
              :width="200"
              :height="200"
              :value="userAddress"
              :qrOptions="{
                typeNumber: 0,
                mode: 'Byte',
                errorCorrectionLevel: 'H',
              }"
              :dotsOptions="{
                color: '#000',
                gradient: {
                  type: 'linear',
                  rotation: 0,
                  colorStops: [
                    { offset: 0, color: '#000' },
                    { offset: 1, color: '#000' },
                  ],
                },
              }"
              :cornersSquareOptions="{ type: 'square' }"
            />
          </div>
        </UCard>
        <UCard>
          <template #header>Redeem</template>

          <UForm
            :validate="validate"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
            @error="onError"
          >
            <UFormGroup label="Quantity" name="quantity">
              <UInput v-model="state.quantity" />
            </UFormGroup>

            <UButton block type="submit"> Redeem </UButton>
          </UForm>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from "#ui/types";
import QRCodeVue3 from "qrcode-vue3";
import { getAccount, getPublicClient, watchContractEvent } from "@wagmi/core";
import { onMounted } from "vue";
import { parseAbiItem } from "viem";
import erc20Abi from "../abis/erc20.json";

const state = reactive({
  quantity: undefined,
});

const { address: userAddress } = getAccount();
const { nftContractAddress } = useNftDetails();
const publicClient = getPublicClient();

onMounted(async () => {
  const logs = await publicClient.getLogs({
    address: "0x36F7caa6bEE589Ed6B24Dfa7A59f929cFeb2848e",
    event: {
      name: "Transfer",
      inputs: [
        { type: "address", indexed: true, name: "from" },
        { type: "address", indexed: true, name: "to" },
        { type: "uint256", indexed: false, name: "value" },
      ],
    },
  });

  console.log("LOOGS", logs);
});

const unwatch = watchContractEvent(
  {
    address: nftContractAddress,
    abi: erc20Abi,
    eventName: "TokensMinted",
  },
  (log) => console.log("NUEVO LOG MINTED,", log)
);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.quantity)
    errors.push({ path: "quantity", message: "Quantity is required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>

<style scoped>
.cardC {
  background: radial-gradient(circle at 1000px 50%, #612333 1%, #121212 23%);
}

.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  border-radius: 10px;
  padding: 1rem;
  color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>

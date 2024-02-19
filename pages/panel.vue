<template>
  <div class="carcC">
    <UContainer class="grid grid-cols-2 lg:grid-cols-4 pt-8 gap-8">
      <div class="col-span-2 lg:col-span-3 max-sm:order-2">
        <h3 class="text-gray-400 text-xl uppercase mb-8">Pending orders:</h3>
        <div v-if="loadingTransfers" class="grid gap-8">
          <UCard v-for="item in 2" class="glass-card">
            <template #header>
              <USkeleton class="h-4 w-28" />
            </template>
            <div class="space-y-2">
              <USkeleton class="h-4 w-[250px]" />
              <USkeleton class="h-4 w-[200px]" />
            </div>
          </UCard>
        </div>
        <div v-else class="grid gap-8">
          <UCard class="glass-card" v-for="transfer in transfers">
            <template #header
              >Order: {{ shortenAddress(transfer.transactionHash) }}</template
            >
            Quantity: {{ transfer.args.quantity }}
            <p class="text-ellipsis w-full">
              Customer: {{ shortenAddress(transfer.args.from) }}
            </p>
          </UCard>
        </div>
      </div>

      <div
        class="grid grid-cols-subgrid col-span-2 lg:col-span-1 gap-4 w-full max-sm:order-1"
      >
        <UCard class="glass-card w-full">
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
        <UCard class="w-full glass-card">
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

            <UButton variant="soft" block type="submit"> Redeem </UButton>
          </UForm>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});
import type { FormError, FormErrorEvent, FormSubmitEvent } from "#ui/types";
import QRCodeVue3 from "qrcode-vue3";
import { getAccount, getPublicClient, watchContractEvent } from "@wagmi/core";
import { onMounted } from "vue";
import erc20Abi from "../abis/erc20.json";

const state = reactive({
  quantity: undefined,
});
const { address: userAddress } = getAccount();
const { nftContractAddress } = useNftDetails();
const publicClient = getPublicClient();
const transfers = ref([]);
const loadingTransfers = ref(false);

onMounted(async () => {
  loadingTransfers.value = true;
  try {
    transfers.value = await publicClient.getLogs({
      address: nftContractAddress,
      event: {
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        name: "TokensTransferred",
        type: "event",
      },
      args: {
        to: userAddress,
      },
      fromBlock: 30084191n,
    });
  } finally {
    loadingTransfers.value = false;
  }
});

const unwatch = watchContractEvent(
  {
    address: nftContractAddress,
    abi: erc20Abi,
    eventName: "TokensTransferred",
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
  background: radial-gradient(circle at 1000px 350px, #612333 1%, #121212 23%);
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

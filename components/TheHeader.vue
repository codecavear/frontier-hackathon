<template>
  <header class="fixed w-full">
    <div
      class="inset-x-0 bottom-0 container mx-auto flex justify-between items-center px-2 py-2 bg-transparent"
    >
      <h1 class="text-white text-2xl font-bold">COFF</h1>
      <div class="flex items-center gap-3">
        <div v-if="isConnected" class="coff-badge h-[38px] font-mono px-3 py-1">
          <UIcon dynamic name="i-bx-coffee-togo" />
          <span>{{ nftBalance }}</span>
        </div>
        <ConnectWallet />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { getAccount } from "@wagmi/core";
const { nftBalance } = useNftDetails();
const { isConnected } = getAccount();
</script>

<style>
.coff-badge {
  border-radius: var(--wui-border-radius-3xl);
  background: var(--wui-gray-glass-002);
  display: flex;
  align-items: center;
  gap: var(--wui-spacing-xs);
  border: 1px solid var(--wui-gray-glass-005);
}
</style>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtLink to="/"
        ><h1 class="text-white text-2xl font-bold">COFF</h1></NuxtLink
      >
    </template>

    <template #right>
      <UColorModeButton />
      <div v-if="isConnected" class="coff-badge h-[31px] font-mono px-3 py-1">
        <UIcon dynamic name="i-bx-coffee-togo" />
        <span v-if="nftBalance">{{ nftBalance }}</span>
      </div>
      <ConnectWallet />
    </template>
  </UHeader>
</template>
<script setup lang="ts">
import { getAccount } from "@wagmi/core";
const { nftBalance } = useNftDetails();
const { isConnected } = getAccount();

import type { NavItem } from "@nuxt/content/dist/runtime/types";

const links = [
  {
    label: "Panel",
    icon: "i-heroicons-docs",
    to: "/panel",
  },
];
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

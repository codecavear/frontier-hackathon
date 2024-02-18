<template>
  <!-- <UButton
    size="md"
    color="orange"
    variant="soft"
    :label="!isConnected ? 'Login' : shortenAddress(address)"
    :trailing="false"
    @click="open"
  /> -->
  <w3m-button />
</template>

<script setup>
import { useWeb3Modal } from "@web3modal/wagmi/vue";
import { getAccount } from "@wagmi/core";

const { open } = useWeb3Modal();
const { isConnected, address } = getAccount();
</script>

<style lang="scss" scoped></style>

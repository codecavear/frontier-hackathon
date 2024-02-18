<template>
  <header class="fixed w-full">
    <div class="inset-x-0 bottom-0 container mx-auto flex justify-between items-center px-2 py-2 bg-transparent">
      <h1 class="text-white text-2xl font-bold">COFF</h1>
      <UKbd class="flex gap-2 items-center py-1 px-2" size="lg">
        {{ nftBalance || 0 }} <div class="flex items-center">COFF
          <UIcon dynamic name="i-bx-coffee-togo" />
        </div>
      </UKbd>
      <ConnectWallet />
    </div>
  </header>
</template>
<script setup>
const { nftBalance } = useNftDetails();
</script>
<style scoped>
/* .bg-translucid 
  {
  background-color: red;    
  } */
</style>
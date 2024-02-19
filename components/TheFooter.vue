<script setup>
const links = [
  {
    label: "codeCave.ar",
    to: "https://codecave.ar/",
  },
];
</script>

<template>
  <UFooter :links="links">
    <template #left> Copyright COFF © {{ new Date().getFullYear() }} </template>
  </UFooter>
</template>

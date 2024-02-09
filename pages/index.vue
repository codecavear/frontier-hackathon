<template>
  <div>
    <!-- Seccion 1 -->
    <div
      class="grid grid-cols-2 items-end content-start text-start h-screen cardC"
    >
      <UContainer>
        <div class="flex flex-col gap-3">
          <h1 class="text-7xl">Not a cup,</h1>
          <h1 class="text-7xl">just a coffee</h1>
          <h3 class="text-gray-400 text-xl">
            Easy, contacless, decentralized, green.
          </h3>
          <div>
            <UButton
              size="md"
              color="orange"
              variant="soft"
              label="Connect"
              :trailing="false"
            />
          </div>
        </div>
      </UContainer>

      <div class="flex justify-start items-end h-[70vh]">
        <CoffeeForm />
      </div>
    </div>
    <!-- Seccion 2 -->
    <UContainer>
      <div class="grid grid-cols-3 items-center text-center h-[50vh]">
        <div><UButton icon="i-heroicons-inbox" color="gray" size="xl" /></div>
        <div><UButton icon="i-heroicons-inbox" color="gray" size="xl" /></div>
        <div><UButton icon="i-heroicons-inbox" color="gray" size="xl" /></div>
      </div>
    </UContainer>
    <!-- Seccion 3 -->
    <UContainer>
      <div class="grid grid-cols-2 h-[70vh]">
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="text-orange-700">About the app</h3>
          <h1 class="text-3xl">About the app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dignissimos doloremque atque? Error omnis eius minus tempore nam
            natus hic reprehenderit, corrupti quasi. Recusandae commodi iure,
            hic illo error nam.
          </p>
          <div>
            <UButton variant="ghost" color="purple"> Learn more </UButton>
          </div>
        </div>

        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-start-5 row-span-2 ...">01</div>
          <div class="row-end-3 row-span-2 ...">02</div>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 4 -->
    <div class="h-screen cardCS">
      <UContainer>
        <div class="grid grid-cols-2 items-center h-[70vh]">
          <div>
            <h1 class="text-3xl">aca va una img</h1>
          </div>

          <div class="flex gap-3 flex-col content-start text-start">
            <h3 class="text-orange-700">About the app</h3>
            <h1 class="text-3xl">About the app</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              dignissimos doloremque atque? Error omnis eius minus tempore nam
              natus hic reprehenderit, corrupti quasi. Recusandae commodi iure,
              hic illo error nam.
            </p>
            <div>
              <UButton variant="ghost" color="purple"> Learn more </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <!-- Seccion 5 -->
    <UContainer>
      <div
        class="grid grid-rows-3 grid-flow-col items-center text-center gap-4 h-[70ph]"
      >
        <div class="row-span-4 col-span-2 ... h-[70vh]"><h1 class="text-3xl">Img1</h1></div>
        <div class="row-span-2 col-span-2 ... h-[35vh]"><h1 class="text-3xl">Img2</h1></div>
        <div class="row-span-2 ... h-[35vh]"><h1 class="text-3xl">Img3</h1></div>
        <div class="row-span-2 ... h-[35vh]"><h1 class="text-3xl">Img4</h1></div>
      </div>
    </UContainer>
    <!-- Seccion 6 -->
    <UContainer>
      <div class="grid grid-cols-2 h-[70vh]">
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="text-orange-700">About the app</h3>
          <h1 class="text-3xl">About the app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dignissimos doloremque atque? Error omnis eius minus tempore nam
            natus hic reprehenderit, corrupti quasi. Recusandae commodi iure,
            hic illo error nam.
          </p>
          <div>
            <UButton variant="ghost" color="purple"> Learn more </UButton>
          </div>
        </div>

        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-start-5 row-span-2 ...">01</div>
          <div class="row-end-3 row-span-2 ...">02</div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup></script>

<style scoped>
.cardC {
  background: radial-gradient(circle at 1000px 150px, #612333 1%, #121212 23%);
}
.cardCS {
  background: radial-gradient(circle at 400px 300px, #612333 1%, #121212 23%);
}
</style>

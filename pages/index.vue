<template>
  <div>
    <!-- Seccion 1 -->
    <div
      class="grid grid-cols-2 items-end content-start text-start h-screen cardC"
    >
      <UContainer>
        <div class="flex flex-col gap-3">
          <h1 class="text-7xl">Not a cup,</h1>
          <h1 class="text-7xl">just a coffee.</h1>
          <h3 class="text-gray-400 text-xl">
            Easy, contacless, decentralized, green.
          </h3>
          <div>
            <ConnectWallet />
          </div>
        </div>
      </UContainer>

      <div class="flex justify-center items-end h-[70vh]">
        <CoffeeForm />
      </div>
    </div>
    <!-- Seccion 2 -->
    <UContainer>
      <div class="grid grid-cols-3 items-center content-center h-[40vh]">
        <div class="flex justify-center">
          <NuxtImage src="/img/group28.png" alt="" />
        </div>
        <div class="flex justify-center">
          <NuxtImage src="/img/group26.png" alt="" />
        </div>
        <div class="flex justify-center">
          <NuxtImage src="/img/group27.png" alt="" />
        </div>
      </div>
    </UContainer>
    <!-- Seccion 3 -->
    <UContainer>
      <div class="grid grid-cols-2 h-[70vh] items-center">
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="text-orange-700">Easy transaction</h3>
          <h1 class="text-3xl">Buy coffee on the go</h1>
          <p>
            Using either your email, phone number, social accounts or blockchain
            wallets, you can create an account in seconds and start buying
            coffee.
          </p>
          <div>
            <UButton variant="ghost" color="purple"> Learn more </UButton>
          </div>
        </div>

        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-start-2 row-span-2 ...">
            <NuxtImage src="/img/Group14.png" alt="" />
          </div>
          <div class="row-end-3 row-span-2 ...">
            <NuxtImage src="/img/Wallet1.png" alt="" />
          </div>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 4 -->
    <div class="h-screen cardCS">
      <UContainer>
        <div class="grid grid-cols-2 items-center h-[70vh]">
          <div class="flex justify-center">
            <NuxtImage src="/img/Wallet1.png" alt="" />
          </div>

          <div class="flex gap-3 flex-col content-start text-start">
            <h3 class="text-orange-700">Sell coffee easily</h3>
            <h1 class="text-3xl">Setup a store in under a minute</h1>
            <p>
              Simple but power technology to help you sell your coffee and own
              your money. Blockchain is used to secure your transactions and
              keep your money safe. Want to redeem your COFF and get your money?
              No problem, we got you covered in seconds.
            </p>
            <div>
              <UButton variant="ghost" color="purple"> Create account </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <!-- Seccion 5 -->
    <UContainer>
      <div class="grid grid-rows-4 grid-flow-col gap-4 h-[70vh]">
        <div class="row-span-4 col-span-1 ...">1</div>
        <div class="row-span-2 col-span-2 ...">2</div>
        <div class="row-span-2 ...">3</div>
        <div class="row-span-2 ...">4</div>
      </div>
    </UContainer>
    <!-- Seccion 6 -->
    <UContainer>
      <div class="grid grid-cols-2 h-[70vh] items-center">
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
          <div class="row-end-3 row-span-2 ...">
            <NuxtImage src="/img/Wallet1.png" alt="" />
          </div>
          <div class="row-start-2 row-span-2 ...">
            <NuxtImage src="/img/Group14.png" alt="" />
          </div>
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

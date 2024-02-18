<template>
  <div class="font-oxanium">
    <!-- Seccion 1 -->
    <div
      class="grid grid-cols-2 items-end content-start text-start h-[80vh] cardC"
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
          <img src="/img/Group26.png" alt="" />
        </div>
        <div class="flex justify-center">
          <img src="/img/Group27.png" placeholder />
        </div>
        <div class="flex justify-center">
          <img src="/img/Group28.png" />
        </div>
      </div>
    </UContainer>
    <!-- Seccion 3 -->
    <UContainer>
      <div class="grid grid-cols-2 h-[80vh] items-center gap-4">
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
          <div class="row-end-3 row-span-2 ...">
            <img src="/img/Wallet1.png" alt="" />
          </div>
          <div class="row-start-2 row-span-2 ...">
            <img src="/img/Group14.png" />
          </div>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 4 -->
    <div class="h-screen justify-center flex items-center cardCS">
      <UContainer>
        <div class="grid grid-cols-2 items-center">
          <div class="flex justify-center">
            <!-- <img src="/img/Wallet1.png" alt="" /> -->
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
    <UContainer class="grid grid-cols-2">
      <div class="cols-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ab nulla
          consequatur. Exercitationem id beatae numquam voluptatum molestias
          saepe possimus consequuntur dolorem, incidunt quos ad ipsa fuga
          repellendus ipsam placeat.
        </p>
      </div>
      <div class="cols-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque hic asperiores at praesentium sint sequi similique reprehenderit
          assumenda est, reiciendis veritatis optio exercitationem blanditiis.
          Porro voluptas harum temporibus dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque hic asperiores at praesentium sint sequi similique reprehenderit
          assumenda est, reiciendis veritatis optio exercitationem blanditiis.
          Porro voluptas harum temporibus dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque hic asperiores at praesentium sint sequi similique reprehenderit
          assumenda est, reiciendis veritatis optio exercitationem blanditiis.
          Porro voluptas harum temporibus dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque hic asperiores at praesentium sint sequi similique reprehenderit
          assumenda est, reiciendis veritatis optio exercitationem blanditiis.
          Porro voluptas harum temporibus dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque hic asperiores at praesentium sint sequi similique reprehenderit
          assumenda est, reiciendis veritatis optio exercitationem blanditiis.
          Porro voluptas harum temporibus dolorum.
        </p>
      </div>
    </UContainer>
    <!-- Seccion 6 The Team -->
    <div class="backWorld">
      <UContainer class="flex justify-end">
        <div class="w-[80vh] text-end">
          <h3 class="text-4xl mb-4">ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            cumque autem delectus, odio quia inventore perspiciatis sequi, ullam
            dolor eveniet totam. Corporis nesciunt non sapiente ipsum, laborum
            aperiam deleniti cumque?
          </p>
        </div>
      </UContainer>

      <UContainer class="h-[40vh] flex justify-center items-center">
        <div class="grid grid-cols-5 gap-3">
          <div
            v-for="member in team"
            :key="member.name"
            class="col-span-1 items-center"
          >
            <UAvatar :src="member.avatar" size="3xl" />
            <p class="text-lg">{{ member.name }}</p>
            <p class="text-lg">{{ member.position }}</p>
            <UIcon name="i-jam-linkedin" dynamic />
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup>
const team = [
  {
    name: "Lighuen Restanio",
    position: "Frontend Developer",
    avatar: "/img/team/lighuen.jpg",
  },
  {
    name: "Nahuel Salto",
    position: "Senior Backend developer",
    avatar: "/img/team/nahuel.jpg",
  },
  {
    name: "Conrado Cañas",
    position: "Senior Frontend enginier",
    avatar: "/img/team/conrado.jpg",
  },
  {
    name: "Ailen Gonzalez",
    position: "Ui Developer",
    avatar: "/img/team/ailen.jpg",
  },
  {
    name: "Delfina Cañas",
    position: "Fullstack Developer",
    avatar: "/img/team/Delfina.jpg",
  },
];
</script>

<style scoped>
.cardC {
  background: radial-gradient(circle at 1000px 150px, #612333 1%, #000000 23%);
}
.cardCS {
  background: radial-gradient(circle at 430px 320px, #612333 1%, #000000 23%);
}
.bg-1 {
  background-color: #181818;
}

.backWorld {
  background-image: url("/img/svg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

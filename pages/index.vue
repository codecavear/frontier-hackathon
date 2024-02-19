<template>
  <div class="font-oxanium">
    <!-- Seccion 1 -->
    <UContainer
      class="lg:min-h-[80vh] flex items-center justify-between max-sm:flex-col max-sm:h-full"
    >
      <div class="w-full pt-8 lg:pt-0">
        <h1 class="text-2xl lg:text-7xl">Buying Coffee,</h1>
        <h1 class="text-2xl lg:text-7xl">just better.</h1>
        <h3 class="text-grey-400 lg:text-xl">
          Easy, contacless, decentralized, green.
        </h3>
        <div>
          <ConnectWallet v-if="!isConnected" />
        </div>
      </div>

      <div class="flex justify-center items-center lg:h-[70vh] mt-4">
        <CoffeeForm />
      </div>
    </UContainer>

    <!-- Seccion 2 -->
    <UContainer class="py-8 lg:py-16 mb-16">
      <div class="flex items-center justify-center gap-8">
        <div class="flex flex-col items-center gap-2">
          <div class="flex justify-center">
            <img class="steps-image" src="/img/Group26.png" alt="" />
          </div>
          <p class="text-xs">Setup your wallet</p>
        </div>
        <hr
          class="w-[20%] hr-steps max-sm:h-[55px] max-sm:w-[0px] max-sm:hidden"
        />
        <div class="flex flex-col items-center gap-2">
          <div class="flex justify-center">
            <img class="steps-image" src="/img/Group27.png" placeholder />
          </div>
          <p class="text-xs">Buy your Coffee</p>
        </div>
        <hr
          class="w-[20%] hr-steps max-sm:h-[55px] max-sm:w-[0px] max-sm:hidden"
        />

        <div class="flex flex-col items-center gap-2">
          <div class="flex justify-center">
            <img class="steps-image" src="/img/Group28.png" />
          </div>
          <p class="text-xs">Spend it anywere</p>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 3 -->
    <UContainer class="py-8">
      <div
        class="flex lg:min-h-[80vh] items-center max-sm:flex-col max-sm:h-[100%]"
      >
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="fontCg">Easy transaction</h3>
          <h1 class="text-3xl">Buy coffee on the go</h1>
          <p class="fontC w-[50%] max-sm:w-[100%]">
            Using either your email, phone number, social accounts or blockchain
            wallets, you can create an account in seconds and start buying
            coffee.
          </p>
          <div>
            <UButton variant="ghost" color="orange">
              Learn more <UIcon name="i-heroicons-arrow-right-20-solid" />
            </UButton>
          </div>
        </div>

        <div class="flex mt-20">
          <div class="img-wallet-connect mx-2">
            <img src="/img/wallet-connect-example.png" alt="" />
          </div>
          <div class="mx-2">
            <img src="/img/login-particle-example.png" alt="" />
          </div>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 4 -->

    <UContainer class="lg:min-h-[90vh] flex items-center py-16">
      <div class="flex justify-between max-sm:flex-col items-center">
        <div class="flex justify-center w-[60%]">
          <!-- <img src="/img/Wallet1.png" alt="" /> -->
        </div>

        <div
          class="flex gap-3 flex-col content-start text-start w-[40%] max-sm:w-[100%]"
        >
          <h3 class="fontCg">Sell coffee easily</h3>
          <h1 class="text-3xl">Setup a store in under a minute</h1>
          <p class="fontC w-[80%] font-extralight max-sm:w-full">
            Simple but power technology to help you sell your coffee and own
            your money. Blockchain is used to secure your transactions and keep
            your money safe. Want to redeem your COFF and get your money? No
            problem, we got you covered in seconds.
          </p>
          <div>
            <UButton
              variant="ghost"
              label="Learn more"
              color="orange"
              class="font-extralight"
            >
              Learn more
              <UIcon name="i-heroicons-arrow-right-20-solid" />
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer
      class="flex justify-evenly items-center h-[100vh] w-[60vw] max-sm:flex-col max-sm:h-full max-sm:my-10 max-sm:w-full"
    >
      <div>
        <p class="fontCg text-sm">Reduce plastic waste</p>
        <p class="text-xl my-2">Not a cup, just a cooffe</p>
        <p class="w-[35%] text-slate-400 max-sm:w-[100%]">
          Use your own cup every day. The coffee shop will serve you the coffee
          you choose in the cup you bring, so both of you will be helping to
          reduce plastic waste
        </p>
      </div>
      <div>
        <UCard
          class="card w-[300px] h-[350px] flex flex-col justify-between my-4"
        >
          <div class="card-top flex">
            <p class="text-slate-400">Spend</p>
            <p class="ml-4 font-semibold">Buy</p>
          </div>

          <div
            class="flex items-center justify-evenly mx-auto w-[60%] font-semibold h-[160px]"
          >
            <p class="text-3xl">-</p>
            <p class="text-6xl">10</p>
            <p class="text-3xl">+</p>
          </div>

          <template #footer>
            <div class="flex justify-between mt-2 mb-4 text-sm">
              <p>Total</p>
              <p>10 USDT</p>
            </div>
            <p class="button-card">BUY</p>
          </template>
        </UCard>
      </div>
    </UContainer>
    <!-- <div class="bg-circle-box">
      <div class="bg-circle"></div>
    </div> -->

    <!-- Seccion 5 Statics-->

    <UContainer class="py-16">
      <div
        class="lg:min-h-[80vh] flex justify-around max-sm:flex-col max-sm:h-[100%] max-sm:items-center max-sm:my-10 max-sm:w-full"
      >
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="text-sm font-extralight mb-10 max-sm:mb-4">STATISTICS</h3>
          <h3 class="text-5xl max-sm:text-4xl">COFF numbers</h3>
        </div>
        <div
          class="flex flex-col items-start h-[70vh] justify-around mt-14 max-sm:mt-0 max-sm:mx-auto"
        >
          <div
            class="flex items-center"
            v-for="(data, index) in statics"
            :key="index"
          >
            <p class="text-7xl fontCg font-semibold">{{ data.number }}</p>
            <p class="ml-4 uppercase font-extralight text-sm w-[20%]">
              {{ data.title }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
    <!-- Seccion 6 The Team -->
    <div class="backWorld py-16">
      <UContainer class="">
        <div class="lg:text-end flex justify-end flex-col lg:items-end mb-8">
          <h3 class="text-5xl mb-4">ABOUT US</h3>
          <p class="font-light text-sm xl:w-[35%] sm:{w-[90%], mb-6 }">
            We are a team of developers exploring the possibilities of Web3,
            Blockchains, and Decentralized Finances. We work with a focus on
            user experience and utilize the latest technologies to bring the
            benefits of Web3 to everyday use apps.
          </p>
        </div>
      </UContainer>

      <UContainer class="min-h-[30vh] flex items-center w-full">
        <div class="grid grid-cols-6 w-full">
          <div
            v-for="member in team"
            :key="member.name"
            class="max-md:col-span-3 lg:cols-span-1 items-center max-sm:my-4"
          >
            <UAvatar :src="member.avatar" class="avatar-size" size="4xl" />
            <p class="text-lg">{{ member.name }}</p>
            <p class="text text-grey-400">{{ member.position }}</p>
            <UIcon name="i-jam-linkedin" dynamic />
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  colorMode: "dark",
});
import { getAccount } from "@wagmi/core";

const { isConnected } = getAccount();

const statics = [
  {
    number: "100",
    title: "plastic cups less",
  },
  {
    number: "200",
    title: "nft suply",
  },
  {
    number: "100",
    title: "holders",
  },
  {
    number: "100",
    title: "tx",
  },
];
const team = [
  {
    name: "Conrado Cañas",
    position: "Sr Frontend Engineer",
    avatar: "/img/team/conrado.jpg",
  },
  {
    name: "Nahuel Salto",
    position: "Sr Backend Developer",
    avatar: "/img/team/nahuel.jpg",
  },
  {
    name: "Lighuen Restanio",
    position: "Frontend Developer",
    avatar: "/img/team/lighuen.jpg",
  },
  {
    name: "Delfina Cañas",
    position: "Fullstack Developer",
    avatar: "/img/team/delfina.jpg",
  },
  {
    name: "Ailen Gonzalez",
    position: "UI Developer",
    avatar: "/img/team/ailen.jpg",
  },
];
</script>

<style scoped>
.hr-steps {
  border: 1px dashed white;
  margin-top: -30px;
}
.img-wallet-connect {
  margin-top: -100px;
}
.card {
  background-color: transparent;
}
.button-card {
  background-color: #57241c57;
  padding: 10px;
  text-align: center;
  color: #eb5d47;
}
.bg-circle-box {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: -200px;
  top: 0;
}

.bg-circle {
  background: radial-gradient(circle, #612333 1%, #121212 43%);
  height: 500px;
  width: 800px;
  background-size: 800px;
}
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
  background-position-x: center;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fontCg {
  background: -webkit-linear-gradient(#eb5d47, #a933b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.avatar-size {
  width: 150px;
  height: 150px;
}

.steps-image {
  @apply max-sm:w-1/2;
}

@media (max-width: 640px) {
  .backWorld {
    height: 100%;
    width: 100%;
  }
  .img-wallet-connect {
    margin-top: -50px;
  }
}
</style>

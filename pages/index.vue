<template>
  <div class="font-oxanium">
    <div id="first-bg">
      <div class="w-[150px] h-[150px] box-first-bg">
        <div class="bg-circle"></div>
      </div>
    </div>
    <!-- Seccion 1 -->
    <UContainer
      class="lg:min-h-[80vh] flex items-center justify-center max-sm:flex-col max-sm:h-full"
    >
      <div class="w-full pt-8 lg:pt-0 sm:w-[50%]">
        <h1 class="text-5xl sm:w-[70%]">Spend a COFF, enjoy a cooffe</h1>
        <h3 class="text-grey-400 lg:text-xl my-2">
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
    <UContainer class="py-8 lg:py-16 mb-16 max-sm:mb-0">
      <div class="flex items-center justify-center max-sm:justify-evenly">
        <div class="flex flex-col items-center">
          <div class="flex justify-center">
            <img class="steps-image" src="/img/Group26.png" alt="" />
          </div>
          <p class="text-xs">Setup your wallet</p>
        </div>
        <hr class="w-[20%] hr-steps max-sm:hidden" max-sm:mt-2 />
        <div class="flex flex-col items-center">
          <div class="flex justify-center">
            <img class="steps-image" src="/img/Group27.png" placeholder />
          </div>
          <p class="text-xs">Buy your Coffee</p>
        </div>
        <hr class="w-[20%] hr-steps max-sm:hidden" />

        <div class="flex flex-col items-center">
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
        class="flex lg:min-h-[80vh] items-center max-sm:h-[100%] max-sm:flex-col"
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
            <UButton variant="ghost">
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
      <div class="flex justify-between max-sm:flex-col-reverse items-center">
        <div
          class="flex justify-center sm:w-[40%] qr-example-img-box max-sm:my-4"
        >
          <img src="/img/qr-example.png" alt="" />
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
            <UButton variant="ghost" label="Learn more" class="font-extralight">
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
        <p class="w-[50%] text-slate-400 max-sm:w-[100%]">
          Use your own cup every day. The coffee shop will serve you the coffee
          you choose in the cup you bring, so both of you will be helping to
          reduce plastic waste
        </p>
      </div>
    </UContainer>

    <div id="third-bg">
      <div
        class="w-[180px] h-[180px] max-sm:w-[100px] max-sm:h-[100px] box-first-bg"
      >
        <div class="bg-circle"></div>
      </div>
    </div>

    <!-- Seccion 5 Statics-->

    <UContainer class="py-8">
      <div
        class="lg:min-h-[80vh] flex justify-around max-sm:flex-col max-sm:h-[35vh] max-sm:my-2 max-sm:w-full"
      >
        <div class="flex gap-3 flex-col content-start text-start">
          <h3 class="text-sm font-extralight mb-10 max-sm:mb-4">STATISTICS</h3>
          <h3 class="text-5xl max-sm:text-4xl">COFF numbers</h3>
        </div>
        <div
          class="flex flex-col items-start h-[80vh] justify-around mt-14 max-sm:mt-0 max-sm:mx-auto max-sm:flex-row max-sm:flex-wrap max-sm:h-[50vh] max-sm:items-center"
        >
          <div
            class="flex items-center"
            v-for="(data, index) in statics"
            :key="index"
          >
            <p class="text-7xl fontCg font-semibold max-sm:text-6xl">
              {{ data.number }}
            </p>
            <div class="flex flex-col">
              <p
                class="ml-4 uppercase font-extralight text-sm w-[20%]"
                v-for="(text, i) in data.title"
                :key="i"
              >
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer class="my-8">
      <h4 class="text-5xl">ROADMAP</h4>
      <div class="max-sm:hidden">
        <img src="/img/ROADMAP.svg" alt="" />
      </div>
      <div class="my-4 sm:hidden">
        <img src="/img/frame1.svg" alt="" />
        <img src="/img/Frame3.svg" class="mt-6" alt="" />
      </div>
    </UContainer>
    <!-- Seccion 6 The Team -->
    <div class="backWorld my-4 m-full h-[150px]"></div>
    <UContainer class="">
      <div class="lg:text-end flex justify-end flex-col lg:items-end mb-8">
        <h3 class="text-5xl mb-4">ABOUT US</h3>
        <p class="font-light text-sm xl:w-[35%] sm:{w-[90%], mb-6 }">
          We are a team of developers exploring the possibilities of Web3,
          Blockchains, and Decentralized Finances. We work with a focus on user
          experience and utilize the latest technologies to bring the benefits
          of Web3 to everyday use apps.
        </p>
      </div>
    </UContainer>

    <UContainer class="min-h-[30vh] flex items-center w-full lg:pb-16">
      <div class="flex justify-between w-full flex-wrap">
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
    title: ["plastic", "cups", "less"],
  },
  {
    number: "200",
    title: ["nft", " suply"],
  },
  {
    number: "100",
    title: ["holders"],
  },
  {
    number: "100",
    title: ["tx"],
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

.bg-circle-box {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: -200px;
  top: 0;
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
  background-image: url("/img/bg-team.png");
  background-repeat: no-repeat;
  background-size: 1800px;
  background-position-x: center;
  background-position-y: top;
  backdrop-filter: blur(10px);
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

.qr-example-img-box {
  box-shadow: 0px 7px 180px 2px rgba(202, 52, 115, 0.79);
}
.box-first-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.bg-circle {
  backdrop-filter: blur(10px);
  box-shadow: 0px 7px 153px 91px rgba(202, 52, 115, 0.79);
  border-radius: 50%;
  width: min-content;
}
#first-bg {
  position: absolute;
  top: 60px;
  right: 190px;
  z-index: 0;
}
#third-bg {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 640px) {
  .backWorld {
    height: 100%;
    width: 100%;
  }
  .img-wallet-connect {
    margin-top: -50px;
  }
  #first-bg {
    right: 10px;
  }
}
</style>

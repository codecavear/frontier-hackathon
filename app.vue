<script lang="ts" setup>
import { createWeb3Modal } from "@web3modal/wagmi/vue";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";

import { configureChains, createConfig } from "@wagmi/core";
import { avalanche, avalancheFuji } from "viem/chains";
import { publicProvider } from "@wagmi/core/providers/public";
import { InjectedConnector } from "@wagmi/core";
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { ParticleWalletConnector } from "./particleWallet";

// 1. Define constants
const projectId = "213ebc649b343df24487a8ab4a0cdf5d";

// 2. Configure wagmi client
const { chains, publicClient } = configureChains(
  [avalanche, avalancheFuji],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const connectorImages = {
  particle: "https://avatars.githubusercontent.com/u/101794619?s=280&v=4",
  injected:
    "https://play-lh.googleusercontent.com/pYXciEtsSzizg_u5BFdNl8GWl1K-5Rjp8X8ltWDE0LXq4NKG-riznMOsfnlYu1sNJw",
};

const featuredWalletIds = ["particle"];

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new ParticleWalletConnector({
      chains,
      options: {
        projectId: "5c41aa7d-8cc3-4220-a056-270118c7d204" as string,
        clientKey: "ccK1BmMV91lQZZmvRL6Dr5eEZ8oF6w8PRIMzYoaU" as string,
        appId: "ca9cf27a-723a-4b56-a6fe-75b31896c3ed" as string,
        chainName: "Avalanche",
        chainId: 43113,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  connectorImages,
  featuredWalletIds,
  themeVariables: {
    "--w3m-color-mix": "#00",
    "--w3m-accent": "#ffffff",
  },
});

const links = [
  {
    label: "Features",
    to: "#features",
    exactHash: true,
  },
  {
    label: "Documentation",
    to: "https://ui.nuxt.com/pro",
    target: "_blank",
  },
];

useSeoMeta({
  description:
    "Nuxt UI Pro is a collection of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.",
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>

    <UNotifications />
    <TheFooter />
  </div>
</template>

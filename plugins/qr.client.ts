import VueQrcode from "@chenfengyuan/vue-qrcode";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("qr-code", VueQrcode);
});

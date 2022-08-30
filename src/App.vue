<script setup lang="ts">
import TheHeader from './components/common/TheHeader.vue';
import TheFooter from './components/common/TheFooter.vue';
import { IFooterLinks } from './types';

const Telegram = defineAsyncComponent(
  () => import('./components/icons/telegram.vue'),
);
const footerLinks: IFooterLinks[] = [
  {
    title: 'Contacts',
    links: [
      {
        label: 'Github',
        href: 'tel:+79124036341',
        target: '_blank',
        icon: null,
      },
      {
        label: 'Vk',
        href: 'https://vk.com/batyodie',
        target: '_blank',
        icon: null,
      },
      {
        label: 'Telegram',
        href: 'https://t.me/Batyodie',
        target: '_blank',
        icon: Telegram,
      },
      {
        label: 'Email',
        href: 'gr.s.joe@gmail.com',
        target: '_blank',
        icon: null,
      },
    ],
  },
];
</script>

<template>
  <div :class="$style.app">
    <TheHeader :class="$style.header" />
    <main class="container" :class="$style.main">
base bollerplate
</main>
    <TheFooter :footer-links="footerLinks" :class="$style.footer" />
  </div>
</template>

<style module lang="scss">
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.header {
  flex: 0 0 auto;
}

.main {
  flex: 1 1 auto;
  padding: 10px;
}

.footer {
  flex: 0 0 auto;
}
</style>

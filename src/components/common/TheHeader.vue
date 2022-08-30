<script setup lang="ts">
import Telegram from '../icons/telegram.vue';
import VueLogo from '../icons/vue-logo.vue';
</script>

<template>
  <header :class="$style.header">
    <div class="container" :class="$style.content">
      <VueLogo :class="$style.vueLogo" />
      <h1 :class="$style.title">
Currency converter
</h1>
      <div :class="$style.contacts">
        <a
          :class="$style.telegram"
          target="_blank"
          href="https://t.me/Batyodie"
        >
          <Telegram />
        </a>
        <a :class="$style.phone" href="tel:+79124036341">+7 (912) 40-363-41</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e3e7ef;

  @include respond-to(mobile) {
    height: 120px;
  }
}

.content {
  display: flex;
  align-items: center;

  @include respond-to(mobile) {
    flex-direction: column;
    justify-content: center;
  }
}

.vueLogo {
  margin-right: 10px;
}

.title {
  font-size: 30px;

  @include respond-to(mobile) {
    font-size: 25px;
  }
}

.contacts {
  margin-left: auto;
  display: flex;
  align-items: center;

  @include respond-to(mobile) {
    margin-left: 0;
  }
}

.telegram {
  margin-right: 10px;
}
</style>

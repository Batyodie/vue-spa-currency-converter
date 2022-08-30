<script setup lang="ts">
import { PropType } from 'vue';
import { IFooterLinks } from '../../types';

const { footerLinks } = defineProps({
  footerLinks: {
    type: Array as PropType<IFooterLinks[]>,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <footer :class="$style.footer">
    <div class="container" :class="$style.content">
      <a :class="$style.phone" href="tel:+79124036341">+7 (912) 40-363-41</a>
    </div>

    <div class="container" :class="$style.listInfo">
      <div
        v-for="({ title, links }, index) of footerLinks"
        :key="index"
        :class="$style.listWrapper"
      >
        <span :class="$style.listTitle">{{ title }}</span>
        <ul :class="$style.list">
          <li v-for="(link, idx) of links" :key="idx" :class="$style.item">
            <a :class="$style.link" v-bind="link">
              <component
                :is="link.icon"
                v-if="link.icon"
                :class="$style.ItemIcon"
              ></component>

              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" module>
.footer {
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 10px;
  background-color: #43495a;
  border-bottom: 1px solid #e3e7ef;
}

.content {
  min-height: 50px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #636b83;
}

.phone {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 10px;
  margin-left: auto;
}

.listInfo {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.listWrapper {
  display: flex;
  flex-direction: column;
}

.listTitle {
  color: #fff;
  font-size: 20px;
}

.item {
  margin-bottom: 10px;
  margin-left: 0;

  &::before {
    content: none;
  }
}

.ItemIcon {
  margin-right: 10px;
}

.link {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
}
</style>

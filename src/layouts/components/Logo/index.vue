<script lang="ts" setup>
import logoText1 from "@@/assets/images/layouts/logo.png?url"
import logoText2 from "@@/assets/images/layouts/logo.png"
import logo from "@@/assets/images/layouts/logo.png?url"
import { useLayoutMode } from "@@/composables/useLayoutMode"

interface Props {
  collapse?: boolean
}

const { collapse = true } = defineProps<Props>()

const { isLeft, isTop } = useLayoutMode()
</script>

<template>
  <div class="layout-logo-container" :class="{ 'collapse': collapse, 'layout-mode-top': isTop }">
    <transition name="layout-logo-fade">
      <router-link v-if="collapse" key="collapse" to="/">
        <img :src="logo" class="layout-logo">
      </router-link>
      <router-link v-else key="expand" to="/" class="not-collapse">
        <img :src="!isLeft ? logoText2 : logoText1" class="layout-logo-text">
        <span :class="!isLeft ? 'logoTitle1' : 'logoTitle2'">任务管理系统</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  position: relative;
  width: 100%;
  height: var(--v3-header-height);
  line-height: var(--v3-header-height);
  text-align: center;
  overflow: hidden;
  .layout-logo {
    display: none;
  }
  .layout-logo-text {
    /* height: 100%;
    vertical-align: middle; */
    width: 40px;
    height: 40px;
    vertical-align: middle;
    display: inline-block;
  }
  .not-collapse {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoTitle1 {
    margin-left: 8px;
    font-size: 22px;
    color: #303133;
  }
  .logoTitle2 {
    margin-left: 8px;
    font-size: 22px;
    color: #ffffff;
  }
}

.layout-mode-top {
  height: var(--v3-navigationbar-height);
  line-height: var(--v3-navigationbar-height);
}

.collapse {
  .layout-logo {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    display: inline-block;
  }
  .layout-logo-text {
    display: none;
  }
}
</style>

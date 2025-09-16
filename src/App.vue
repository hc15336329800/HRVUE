<template>
<!-- 头部导航 -->
  <SiteHeader /> 
  <!-- 动态页面路由 -->
  <RouterView />
  <!-- 底部信息 -->
  <SiteFooter />
</template>

<script setup>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

// Root component renders the active route.
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<template>
  <header class="site-header">
    <div class="container topbar">
      <div class="logo">
        <img src="/src/assets/images/恒仁log.png" alt="HRNET" />
      </div>

      <button
        class="menu-toggle"
        type="button"
        aria-label="切换导航菜单"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ open: isMenuOpen }">
        <a href="#" @click="closeMenu">首页</a>
        <a href="about" @click="closeMenu">关于公司</a>
        <a href="#" @click="closeMenu">产品信息</a>
        <a href="#" @click="closeMenu">咨询动态</a>
        <a href="#" @click="closeMenu">联系方式</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.site-header {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  max-height: 90px;
}

.logo {
  margin: 10px 0;
}

.menu-toggle {
  display: none;
  margin-left: auto;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px 0;
  background-color: #333;
  transition: transform 0.3s ease;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  margin: 0 15px;
  color: #333;
  text-decoration: none;
}

.nav.open {
  display: flex;
}

@media (max-width: 768px) {
  .topbar {
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
  }

  .nav a {
    margin: 8px 0;
    width: 100%;
    display: block;
  }

  .nav.open {
    display: flex;
  }
}
</style>
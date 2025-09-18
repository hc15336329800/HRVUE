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
       <el-menu
                class="nav-menu"
                mode="horizontal"
                :ellipsis="false"
                :default-active="activeIndex"
                @select="handleSelect"
              >
                <template v-for="item in menuItems" :key="item.label">
                  <el-sub-menu v-if="item.children" :index="item.href">
                    <template #title>
                      <span>{{ item.label }}</span>
                    </template>
                    <el-menu-item
                      v-for="child in item.children"
                      :key="child.label"
                      :index="child.href"
                    >
                      {{ child.label }}
                    </el-menu-item>
                  </el-sub-menu>
                  <el-menu-item v-else :index="item.href">
                    {{ item.label }}
                  </el-menu-item>
                </template>
              </el-menu>
            </nav>
          </div>
        </header>
      </template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isMenuOpen = ref(false);

const menuItems = [
  { label: '首页', href: '/' },
  { label: '关于公司', href: '/about' },
    { label: '产品信息', href: '/products' },

  // {
  //   label: '产品信息',
  //   href: 'products',
  //   children: [
  //     { label: '产品概览', href: '/products/overview' },
  //     { label: '解决方案', href: '/products/solutions' },
  //     { label: '常见问题', href: '/products/faq' }
  //   ]
  // },
  // { label: '咨询动态', href: '/news' },
  { label: '联系方式', href: '/contact' }
];

const router = useRouter();
const route = useRoute();

const activeIndex = ref(route.path);

watch(
  () => route.path,
  (newPath) => {
    activeIndex.value = newPath;
    isMenuOpen.value = false;
  },
  { immediate: true }
);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleSelect = (index) => {
  isMenuOpen.value = false;

  if (index && index.startsWith('/')) {
    router.push(index);
  }
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
  /* max-height: 90px; */
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

.nav-menu {
  border-bottom: none;
}

.nav-menu :deep(.el-menu-item) {
  font-size: 16px;
  padding: 0 12px;
}

.nav-menu :deep(.el-sub-menu__title) {
  font-size: 16px;
  padding: 0 12px;
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
      padding: 10px 0;
    }
  
    .nav.open {
      display: block;
    }
  
    .nav-menu {
      width: 100%;
      border-right: none;
    }
  
    .nav-menu :deep(.el-menu-item),
    .nav-menu :deep(.el-sub-menu__title) {
      height: 44px;
      line-height: 44px;
    }
}
</style>
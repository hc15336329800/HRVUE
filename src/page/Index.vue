<template>
  <div class="home-page">
    <!-- ===== 顶部菜单栏 ===== -->
    <header class="site-header">
      <div class="container topbar">
        <div style=" margin: 10px  0px;">
          <img src="/src/assets/images/恒仁log.png" alt="HRNET">
        </div>

        <nav class="nav">
          <a href="#">首页</a>
          <a href="#">关于公司</a>
          <a href="#">产品信息</a>
          <a href="#">咨询动态</a>
          <a href="#">联系方式</a>
        </nav>
      </div>
    </header>

    <!-- ===== 页面自身 (Index.cshtml) 内容 ===== -->
    <main class="main-content">
      <!-- 上部内容 -->
      <section class="" style="    display: flex;    flex-wrap: nowrap;    justify-content: center;">
        <section class="banner">
          <div class="banner-container">
            <transition name="slide" mode="out-in">
              <img :src="banners[currentIndex].src" :alt="banners[currentIndex].alt" />
            </transition>
          </div>
          <div class="banner-controls">
            <button @click="prevBanner" class="prev-btn">❮</button>
            <button @click="nextBanner" class="next-btn">❯</button>
          </div>
        </section>
      </section>

      <!-- 中部内容 -->
      <section class="middle-section">
        <section class="products">
          <h2>产品展示</h2>
          <div class="product-list">
            <div v-for="p in products" :key="p.id" class="product">
              <img :src="p.img" :alt="p.name">
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </section>

        <section class="news">
          <h2>新闻资讯</h2>
          <ul>
            <li v-for="n in news" :key="n.id">
              <a :href="n.url">{{ n.title }}</a>
              <span class="date">{{ n.date }}</span>
            </li>
          </ul>
        </section>
      </section>

      <!-- 下部内容 -->
      <section class="bottom-section">
        <footer class="site-footer">
          <div class="container">
            <p>&copy; 2020 HRNET 版权所有</p>
          </div>
        </footer>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const banners = ref([
  { src: '/src/assets/images/damen001.jpg', alt: 'Banner 1' },
  { src: '/src/assets/images/damen002.jpg', alt: 'Banner 2' },
  // { src: '/src/assets/images/damen003.jpg', alt: 'Banner 3' }
]);

const currentIndex = ref(0);

const products = ref([
  { id: 1, name: '产品一', desc: '产品一描述', img: '/images/prod1.jpg' },
  { id: 2, name: '产品二', desc: '产品二描述', img: '/images/prod2.jpg' },
  { id: 3, name: '产品三', desc: '产品三描述', img: '/images/prod3.jpg' }
]);

const news = ref([
  { id: 1, title: '新闻标题一', url: '#', date: '2020-01-01' },
  { id: 2, title: '新闻标题二', url: '#', date: '2020-01-02' },
  { id: 3, title: '新闻标题三', url: '#', date: '2020-01-03' }
]);

let bannerInterval = null;

const startBannerRotation = () => {
  bannerInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % banners.value.length;
  }, 2000); // 每3秒切换一次
};

const stopBannerRotation = () => {
  clearInterval(bannerInterval);
};

const prevBanner = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length;
};

const nextBanner = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.value.length;
};

onMounted(() => {
  startBannerRotation();
});

onBeforeUnmount(() => {
  stopBannerRotation();
});
</script>
 
<style scoped>
.home-page {
  font-family: "Microsoft YaHei", sans-serif;
  width: 100%;  /* 确保宽度为100% */
  min-height: 100vh; /* 确保至少占满全屏高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

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

.nav a {
  margin: 0 15px;
  color: #333;
  text-decoration: none;
}

/* 上部内容布局 */
.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 使内容区域占满剩余空间 */
}

/* Banner */
.banner {
  position: relative;
  max-width: 1080px;
  max-height: 390px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-container {
  display: flex;
   transition: transform 0.5s ease-in-out;
   width: 100%;
   height: 100%;
}

.banner img {
 width: 100%;
   height: 100%;
   object-fit: cover;
}


/* 滑动过渡动画 */
.banner-enter-active, .banner-leave-active {
  transition: transform 0.5s ease-in-out;
}

.banner-enter, .banner-leave-to {
  transform: translateX(100%); /* 从右滑入 */
}

/* 控制按钮 */
.banner-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.prev-btn,
.next-btn {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
}

.prev-btn:hover,
.next-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* 中部内容布局 */
.middle-section {
  padding: 40px 0;
}

.products h2,
.news h2 {
  text-align: center;
  margin-bottom: 30px;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  width: 300px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-align: center;
  padding: 15px;
}

.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news ul {
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
}

.news li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed #ddd;
}

.news li a {
  color: #444;
  text-decoration: none;
}

.date {
  color: #999;
  font-size: 0.9em;
}

/* 下部内容布局 */
.bottom-section {
  margin-top: 40px;
}

.site-footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}
</style>

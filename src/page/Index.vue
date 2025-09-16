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
             <Swiper
                       class="banner-swiper"
                       :modules="swiperModules"
                       :loop="true"
                       :autoplay="autoplayOptions"
                       navigation
                       pagination
                     >
                       <SwiperSlide v-for="banner in banners" :key="banner.src">
                         <img :src="banner.src" :alt="banner.alt" />
                       </SwiperSlide>
                     </Swiper>
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
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperModules = [Autoplay, Navigation, Pagination];
const autoplayOptions = {
  delay: 3000,
  disableOnInteraction: false,
};


const banners = ref([
  { src: '/src/assets/images/damen001.jpg', alt: 'Banner 1' },
  { src: '/src/assets/images/damen002.jpg', alt: 'Banner 2' },
  // { src: '/src/assets/images/damen003.jpg', alt: 'Banner 3' }
]);
 

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

 
 .banner img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   display: block;
 }
 
 .banner :deep(.swiper) {
   width: 100%;
   height: 100%;
 }
 
 .banner :deep(.swiper-slide) {
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 .banner :deep(.swiper-button-prev),
 .banner :deep(.swiper-button-next) {
   width: 44px;
   height: 44px;
   margin-top: 0;
   color: #fff;
   background: rgba(0, 0, 0, 0.4);
   border-radius: 50%;
   backdrop-filter: blur(2px);
 }
 
 .banner :deep(.swiper-button-prev:hover),
 .banner :deep(.swiper-button-next:hover) {
   background: rgba(0, 0, 0, 0.7);
 }
 
 .banner :deep(.swiper-pagination-bullet) {
   background: rgba(255, 255, 255, 0.6);
   opacity: 1;
 }
 
 .banner :deep(.swiper-pagination-bullet-active) {
   background: #fff;
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

<!-- Index.vue -->
<template>
  <div class="home-page">
    <!-- ===== 布局页 (_Layout.cshtml) 内容 ===== -->
    <header class="site-header">
      <div class="container topbar">
        <div class="logo">
          <img src="/images/logo.png" alt="HRNET">
        </div>

        <nav class="nav">
          <a href="#">首页</a>
          <a href="#">产品中心</a>
          <a href="#">新闻资讯</a>
          <a href="#">联系我们</a>
        </nav>
      </div>
    </header>

    <!-- ===== 页面自身 (Index.cshtml) 内容 ===== -->
    <main>
      <!-- Banner -->
      <section class="banner">
        <img src="/images/banner.jpg" alt="Banner">
      </section>

      <!-- 产品列表 -->
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

      <!-- 新闻列表 -->
      <section class="news">
        <h2>新闻资讯</h2>
        <ul>
          <li v-for="n in news" :key="n.id">
            <a :href="n.url">{{ n.title }}</a>
            <span class="date">{{ n.date }}</span>
          </li>
        </ul>
      </section>
    </main>

    <!-- Footer（来自母版页） -->
    <footer class="site-footer">
      <div class="container">
        <p>&copy; 2020 HRNET 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({ name: 'IndexPage' });

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
  height: 70px;
}

.nav a {
  margin: 0 15px;
  color: #333;
  text-decoration: none;
}

.banner img {
  width: 100%;
  display: block;
}

.products,
.news {
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

.site-footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
}
</style>

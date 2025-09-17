<template>
  <div class="home-page">
    <!-- ===== 页面自身 内容 ===== -->
    <main class="main-content">
      <!-- 上部内容 -->
      <section class="banner-section">
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

      <!-- 公司概览（新增） -->
      <section class="company-overview" style="display:flex;gap:20px;align-items:stretch;max-width:1080px;margin:24px auto 0;">
        <!-- 左：公司图片 -->
        <div class="co-left" style="flex:0 0 48%;"><img :src="company.img" alt="公司图片" style="width:100%;height:100%;object-fit:cover;border-radius:4px;border:1px solid #eee;" /></div>
        <!-- 右：上-简介，下-产品名称列表（类似表格） -->
        <div style="flex:1;display:flex;flex-direction:column;">
          <!-- 简介 -->
          <div style="background:#fff;border:1px solid #eee;border-radius:4px;padding:12px 14px;line-height:1.8;">
            <h3 style="margin:0 0 6px;font-size:18px;color:#000;">{{ company.name }}</h3>
            <p v-for="(p,i) in company.desc" :key="i" style="margin:4px 0;color:#666666;">{{ p }}</p>
          </div>
          <!-- 产品“表格”列表 -->
          <div style="margin-top:10px;border-radius:4px;overflow:hidden;border:1px solid #eee;">
            <div v-for="(row,i) in productLines" :key="i" :style="{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 12px',background:i%2? '#f6fff6':'#fff',borderTop:i? '1px solid #f0f0f0':'',fontSize:'14px'}">
              <span style="color:#333;">{{ row.name }}</span>
              <small v-if="row.note" style="color:#999;">{{ row.note }}</small>
            </div>
          </div>
        </div>
      </section>


      <!-- 产品展示跑马灯 -->
      <section class="products">
        <!-- <h2>产品展示</h2> -->
        <!-- 跑马灯（Swiper） -->
        <Swiper
          class="prod-marquee"
          :modules="swiperModules"
          :loop="true"
          :autoplay="prodAutoplay"       
      :speed="10000"                           
       :free-mode="{ enabled: true, momentum: false }"
      :loop-additional-slides="products.length"   
          :allow-touch-move="true"
          slides-per-view="auto"          
          :space-between="16"
        >
          <SwiperSlide v-for="p in products" :key="p.id">
            <a class="prod-card" :href="p.url || '#'" target="_blank" rel="noopener">
              <div class="img-wrap"><img :src="p.img" :alt="p.name" /></div>
              <div class="title">{{ p.name }}</div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>

 
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperModules = [Autoplay, Navigation, Pagination, FreeMode];
 // 跑马灯自动播放：0 延迟 + 匀速
const prodAutoplay = { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true };

const autoplayOptions = {
  delay: 2000,
  disableOnInteraction: false,
};

const banners = ref([
  {
    src: '/src/assets/images/damen001.jpg',
    alt: 'Banner 1',
  },
  {
    src: '/src/assets/images/damen002.jpg',
    alt: 'Banner 2',
  },
  // { src: '/src/assets/images/damen003.jpg', alt: 'Banner 3' }
]);

  const products = ref([
    { id: 1, name: '产品一', desc: '产品一描述', img: '/src/assets/images/大门.jpg', url: '#' },
    { id: 2, name: '产品二', desc: '产品二描述', img: '/src/assets/images/大门.jpg', url: '#' },
    { id: 3, name: '产品三', desc: '产品三描述', img: '/src/assets/images/大门.jpg', url: '#' },
	{ id: 4, name: '产品三', desc: '产品三描述', img: '/src/assets/images/大门.jpg', url: '#' },
	{ id: 5, name: '产品三', desc: '产品三描述', img: '/src/assets/images/大门.jpg', url: '#' },
	{ id: 6, name: '产品三', desc: '产品三描述', img: '/src/assets/images/大门.jpg', url: '#' },
  ]);
const news = ref([
  {
    id: 1,
    title: '新闻标题一',
    url: '#',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: '新闻标题二',
    url: '#',
    date: '2020-01-02',
  },
  {
    id: 3,
    title: '新闻标题三',
    url: '#',
    date: '2020-01-03',
  },
]);

const company = ref({
  name: '山东恒仁(集团)工贸有限公司',
  img: '/src/assets/images/大门.jpg', // ← 按需替换为你的公司图片路径
  desc: [
    '成立于1996年10月，注册资本7000万元，坐落在山东省滕州市东郭镇，是一家综合性的集团公司，占地700余亩，总资产10余亿元，现有职工1800余人，先后获得：农业产业化国家重点龙头企业，2020中国农 业企业500强、中国粮油企业50强，枣庄市农产品加工纳税大户。主要生产加工玉米淀粉、淀粉糖、植物油及副产综合利用等产品。',
    // '主要生产加工玉米淀粉、淀粉糖、植物油及副产综合利用等产品。'
  ]
});

const productLines = ref([
  { name:'年产食用玉米淀粉130余万吨', note:'一级食用' },
  { name:'麦芽糖浆45余万吨', note:'浓度75~80' },
  { name:'喷浆玉米皮15余万吨', note:'蛋白17' },
  { name:'玉米蛋白粉10余万吨', note:'含量55~60' },
  { name:'玉米胚芽10余万吨', note:'含油38~40' },
  { name:'玉米浆8余万吨', note:'波美18' }
]);


</script>

<style scoped>
.home-page {
  font-family: 'Microsoft YaHei', sans-serif;
  width: 100%;
  /* 确保宽度为100% */
  min-height: 100vh;
  /* 确保至少占满全屏高度 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
}

.banner-section {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

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

/* === 新增：移动端自适应（隐藏左侧公司图片） === */
/* === 移动端自适应（保持最小改动） === */
@media (max-width: 768px) {
  /* 公司概览：保持原来设置 */
  .company-overview { max-width:100% !important; margin:16px auto 0 !important; padding:0 12px; }
  .company-overview .co-left { display:none !important; }

  /* 1) 让 banner 的可视宽度与上面简介一致 */
  .banner-section { width:100%; padding:0px; }                 /* 与 company-overview 一致的左右 12px */
  .banner{ width:95% !important; max-width:1080px !important;    /* 与 Max 容器一致 */
           margin:0px auto; height:auto !important; aspect-ratio:16/9; 
		   margin-top: 10px;
           max-height:240px !important; overflow:hidden; }

  /* 2) 明确内部高度，图片铺满且显示 */
  .banner :deep(.swiper),
  .banner :deep(.swiper-wrapper),
  .banner :deep(.swiper-slide){ height:100% !important; }
  .banner :deep(.swiper-slide){ background:transparent !important; } /* 防止纯色底遮盖感 */
  .banner img{ position:absolute; inset:0; width:100%; height:100% !important; object-fit:cover; display:block; }

  /* 3) 小屏不显示左右箭头，缩小分页点 */
  .banner :deep(.swiper-button-prev),
  .banner :deep(.swiper-button-next){ display:none !important; }
  .banner :deep(.swiper-pagination-bullet){ width:6px; height:6px; margin:0 2px; }
  .banner :deep(.swiper-pagination-bullets){ bottom:6px !important; }
}


/* ===== 产品跑马灯样式（新增） ===== */
.products { width:100%; }
.products h2 { text-align:center; margin:0 0 12px; }

/* 容器宽度与公司介绍一致：1080 + 两侧内边距 */
.prod-marquee { max-width:1080px; margin:15px auto;  }
.prod-marquee :deep(.swiper-wrapper){ transition-timing-function: linear !important; } /* 匀速 */

/* 每个卡片：固定宽度，slidesPerView=auto 会按此宽度滚动 */
.prod-marquee :deep(.swiper-slide){ width:180px !important; }    /* PC 卡片宽度 */
.prod-card{ display:block; text-decoration:none; color:#333; }
.img-wrap{ width:100%; height:120px; border-radius:8px; overflow:hidden; border:1px solid #eee; background:#f7f7f7; }
.img-wrap img{ width:100%; height:100%; object-fit:cover; display:block; }
.title{ text-align:center; font-size:14px; margin-top:8px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

/* 小屏更紧凑、与公司概览同边距 */
@media (max-width: 768px){
  .prod-marquee{ padding:0 12px; }
  .prod-marquee :deep(.swiper-slide){ width:150px !important; }  /* 手机卡片宽度 */
  .img-wrap{ height:96px; border-radius:6px; }
  /* 与上方一致：隐藏箭头、缩小圆点（如需） */
  .products :deep(.swiper-button-prev),
  .products :deep(.swiper-button-next){ display:none !important; }
  .products :deep(.swiper-pagination-bullet){ width:6px; height:6px; margin:0 2px; }
}



</style>

<template>
  <div class="product-page">
    <aside class="product-categories">
      <h2 class="sidebar-title">产品分类</h2>
      <ul>
        <li
          v-for="category in categories"
          :key="category.id"
          :class="{ active: activeCategory === category.id }"
        >
          <a href="#" @click.prevent="scrollToCategory(category.id)">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </aside>

    <main class="product-sections">
      <section
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :ref="(el) => setSectionRef(el, category.id)"
        class="product-section"
      >
        <h3>{{ category.name }}</h3>
        <p class="section-description">{{ category.description }}</p>

        <div
          v-for="product in category.products"
          :key="product.title"
          class="product-card"
        >
          <img :src="product.image" :alt="product.title" />
          <div class="product-info">
            <h4>{{ product.title }}</h4>
            <p>{{ product.description }}</p>
            <ul v-if="product.features?.length" class="feature-list">
              <li v-for="feature in product.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = [
  {
    id: 'grade-starch',
    name: '国标一级淀粉',
    description:
      '精选优质玉米原料，通过先进工艺加工而成，色泽洁白，适用于食品、医药和化工等行业。',
    products: [
      {
        title: '高纯度玉米淀粉',
        description:
          '采用多级过滤和精制技术，颗粒细腻、纯度高，满足烘焙、糖果和饮品行业的品质需求。',
        image: new URL('../assets/images/p1.jpg', import.meta.url).href,
        features: ['水分≤14%', '蛋白质≤0.3%', '白度≥90']
      },
      {
        title: '食品级工业淀粉',
        description:
          '适合食品工业及纸张、纺织等行业作为增稠剂和黏结剂使用，性能稳定。',
        image: new URL('../assets/images/p2.jpg', import.meta.url).href,
        features: ['粘度稳定', '粒度均匀', '存储期长']
      }
    ]
  },
  {
    id: 'malt-syrup',
    name: '淀粉麦芽糖浆',
    description:
      '通过酶法水解技术制成的高品质麦芽糖浆，口感纯正、甜度温和。',
    products: [
      {
        title: '高转化麦芽糖浆',
        description:
          '具有出色的防结晶性能和良好的稳定性，适用于饮料、果酱及乳制品生产。',
        image: new URL('../assets/images/p3.jpg', import.meta.url).href,
        features: ['麦芽糖含量≥70%', '澄清透亮', '耐高温']
      },
      {
        title: '低糖型麦芽糖浆',
        description:
          '甜度柔和，适合烘焙和糖果产品，实现低糖配方的同时保持口感。',
        image: new URL('../assets/images/p4.jpg', import.meta.url).href
      }
    ]
  },
  {
    id: 'corn-fiber',
    name: '喷浆玉米皮',
    description:
      '喷浆工艺保留玉米皮中的膳食纤维及营养物质，是优质的动物饲料原料。',
    products: [
      {
        title: '高纤维玉米皮颗粒',
        description:
          '喷浆均匀、颗粒饱满，可显著提升牲畜的适口性和营养吸收率。',
        image: new URL('../assets/images/p5.jpg', import.meta.url).href,
        features: ['粗纤维≥18%', '蛋白质≥9%', '水分≤12%']
      }
    ]
  },
  {
    id: 'corn-gluten',
    name: '玉米蛋白粉',
    description:
      '富含氨基酸和天然色素的玉米蛋白粉，是优质的动物蛋白饲料。',
    products: [
      {
        title: '饲料级玉米蛋白粉',
        description:
          '采用低温烘干工艺，有效保留营养活性，适合畜禽、水产饲料使用。',
        image: new URL('../assets/images/p6.jpg', import.meta.url).href,
        features: ['蛋白质≥60%', '脂肪≤3%', '色泽金黄']
      },
      {
        title: '水产专用蛋白粉',
        description:
          '粒度细腻，易于水中分散吸收，提升水产养殖的饲料利用率。',
        image: new URL('../assets/images/p7.jpg', import.meta.url).href
      }
    ]
  },
  {
    id: 'corn-steep',
    name: '玉米浆液',
    description:
      '富含乳酸、氨基酸等营养成分，可用于饲料发酵及工业发酵。',
    products: [
      {
        title: '发酵级玉米浆',
        description:
          '提供丰富的可溶性蛋白和微量元素，为工业发酵提供稳定的营养来源。',
        image: new URL('../assets/images/damen001.jpg', import.meta.url).href,
        features: ['总固形物≥45%', '乳酸含量稳定']
      }
    ]
  },
  {
    id: 'raw-materials',
    name: '原料采购',
    description:
      '完善的供应链体系，全年提供稳定可靠的玉米原料采购服务。',
    products: [
      {
        title: '粮源一体化服务',
        description:
          '联合多地优质种植基地，提供玉米原粮、淀粉及副产品的一站式采购方案。',
        image: new URL('../assets/images/damen003.jpg', import.meta.url).href,
        features: ['产地直采', '全程冷链', '质量追溯']
      }
    ]
  }
];

const activeCategory = ref(categories[0].id);
const sectionRefs = new Map();

const setSectionRef = (el, id) => {
  if (el) {
    sectionRefs.set(id, el);
  }
};

const scrollToCategory = (id) => {
  activeCategory.value = id;
  const target = sectionRefs.get(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
.product-page {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 24px 64px;
  box-sizing: border-box;
}

.product-categories {
  border-right: 1px solid #e5e5e5;
  padding-right: 16px;
}

.sidebar-title {
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
}

.product-categories ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-categories li {
  border-bottom: 1px dashed #dcdcdc;
}

.product-categories li:last-child {
  border-bottom: none;
}

.product-categories a {
  display: block;
  padding: 12px 0;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
}

.product-categories li.active a,
.product-categories a:hover {
  color: #1677ff;
}

.product-sections {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.product-section h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #222;
}

.section-description {
  margin: 0 0 24px;
  color: #666;
  line-height: 1.6;
}

.product-card {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
}

.product-card img {
  width: 220px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info h4 {
  margin: 0 0 12px;
  font-size: 20px;
  color: #333;
}

.product-info p {
  margin: 0 0 12px;
  line-height: 1.6;
  color: #555;
}

.feature-list {
  padding-left: 18px;
  margin: 0;
  color: #444;
  line-height: 1.5;
}

.feature-list li {
  margin-bottom: 4px;
}

@media (max-width: 960px) {
  .product-page {
    grid-template-columns: 1fr;
  }

  .product-categories {
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 16px;
    margin-bottom: 24px;
  }

  .product-card {
    flex-direction: column;
  }

  .product-card img {
    width: 100%;
    height: auto;
  }
}
</style>
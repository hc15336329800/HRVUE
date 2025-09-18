<template>
  <div class="about-page">
    <section class="top-banner" role="img" aria-label="山东恒仁(集团)工贸有限公司">
      <div class="top-banner__overlay">
        <h1 class="top-banner__title">关于公司</h1>
        <p class="top-banner__subtitle">山东恒仁(集团)工贸有限公司</p>
      </div>
    </section>

    <div class="about-container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <RouterLink to="/" class="breadcrumb__item">
          <span class="breadcrumb__icon" aria-hidden="true">🏠</span>
          首页
        </RouterLink>
        <span class="breadcrumb__separator" aria-hidden="true">/</span>
        <RouterLink to="/about" class="breadcrumb__item breadcrumb__item--active">关于公司</RouterLink>
      </nav>

      <section class="section">
        <header class="section__header">
          <span class="section__title">企业简介</span>
          <em class="section__subtitle">Company vision</em>
        </header>

        <div class="section__body">
          <div class="quote quote--left" aria-hidden="true">“</div>

          <article class="article" aria-label="山东恒仁工贸有限公司企业简介">
            <p>
              <strong>山东恒仁工贸有限公司</strong>成立于1996年10月，注册资本7000万元，位于滕州市东郭镇辛緒村。主要生产加工玉米淀粉、淀粉液糖、棉花精纺、副产物综合利用的农产品加工企业，现有员工1860人。企业总资产61312.80万元，资产负债率47.89%。形成年加工玉米130万吨的淀粉、年产45万吨淀粉液糖、12万纱锭高档棉纺、装机容量6.7万千瓦热电、5万吨仓粮食储库、日处理6000立方污水与3万立方沼气发电能力。
            </p>
            <p>
              公司是农业产业化国家重点龙头企业，2020中国农业企业500强、中国粮油企业50强，枣庄市农产品加工纳税大户。主产品“恒仁”牌玉米淀粉市场占有率3.55%，列入工信厅2020年玉米产品制造单项冠军。2019年枣庄市工业百强企业前十、枣庄市重点龙头骨干工业企业、枣庄市双千工程技术改造示范企业，山东省节能减排先进单位，环保达标先进单位。国家统计局千家最具成长力民营企业，AA+级信用企业、A级纳税企业，2016-2018年实现三年纳税1.027亿元。在2020年疫情的形势下，全年实现销售额27.87亿，实缴税3411.76万元、利润3396.1万元，营业收入和税收与上年同比分别增长6.41%、10.23%的经营业绩。公司在确保员工工资的基础上，利润同比下降13.1%实属正常。疫情期间不减员、保就业、保工资、保稳定，实现了逆势增长，创造了良好的经济与社会效益，为企业的可持续发展打下了坚实基础。
            </p>
          </article>

          <div class="quote quote--right" aria-hidden="true">”</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #414141;
}

.top-banner {
  position: relative;
  width: 100%;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(1, 173, 168, 0.8), rgba(31, 182, 255, 0.8)),
    url('/src/assets/images/damen0011.jpg') center/cover no-repeat;
}

.top-banner__overlay {
  text-align: center;
  padding: 48px 16px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.top-banner__title {
  margin: 0;
  font-size: clamp(32px, 5vw, 42px);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.top-banner__subtitle {
  margin: 12px 0 0;
  font-size: clamp(16px, 3vw, 22px);
  opacity: 0.9;
}

.about-container {
  width: min(1100px, 92vw);
  margin: 0 auto;
  padding: 48px 0 72px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666666;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.breadcrumb__item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb__item:hover {
  color: #01ada8;
}

.breadcrumb__item--active {
  color: #01ada8;
  font-weight: 600;
}

.breadcrumb__icon {
  font-size: 14px;
}

.section {
  background: #fdfdfd;
  border-radius: 16px;
  padding: 40px clamp(24px, 6vw, 56px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
}

.section__header {
  text-align: center;
  margin-bottom: 32px;
  color: #414141;
}

.section__title {
  display: block;
  font-size: clamp(26px, 4vw, 36px);
  font-weight: 600;
}

.section__subtitle {
  display: block;
  margin-top: 8px;
  font-size: 16px;
  color: #666666;
}

.section__body {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
}

.article {
  font-size: 16px;
  line-height: 2.2;
  text-align: justify;
  text-indent: 2em;
  color: #414141;
}

.article p + p {
  margin-top: 24px;
}

.quote {
  font-size: clamp(48px, 12vw, 96px);
  font-family: 'Georgia', 'Times New Roman', serif;
  color: rgba(1, 173, 168, 0.25);
  line-height: 1;
  user-select: none;
}

.quote--left {
  justify-self: start;
  margin-top: -20px;
}

.quote--right {
  justify-self: end;
  transform: translateY(-10px);
}

@media (min-width: 768px) {
  .section__body {
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: flex-start;
  }

  .quote--left {
    margin-right: 16px;
  }

  .quote--right {
    margin-left: 16px;
  }
}

@media (max-width: 767px) {
  .about-container {
    padding-top: 32px;
  }

  .section {
    padding: 32px 20px;
  }

  .section__body {
    text-align: left;
  }

  .quote--right {
    justify-self: center;
    transform: none;
  }
}
</style>
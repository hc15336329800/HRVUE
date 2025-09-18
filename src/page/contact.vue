<template>
  <div class="contact-page">
    <section class="top-banner" role="img" aria-label="山东恒仁(集团)工贸有限公司">
      <div class="top-banner__overlay">
        <h1 class="top-banner__title">联系方式</h1>
        <p class="top-banner__subtitle">山东恒仁(集团)工贸有限公司</p>
      </div>
    </section>

    <div class="contact-container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <RouterLink to="/" class="breadcrumb__item">
          <span class="breadcrumb__icon" aria-hidden="true">🏠</span>
          首页
        </RouterLink>
        <span class="breadcrumb__separator" aria-hidden="true">/</span>
        <RouterLink to="/contact" class="breadcrumb__item breadcrumb__item--active">联系方式</RouterLink>
      </nav>

      <div class="contact-layout">
        <aside class="contact-panel" aria-labelledby="contact-title">
          <header class="contact-panel__header">
            <span id="contact-title" class="contact-panel__title">联系我们</span>
            <em class="contact-panel__subtitle">Get in touch</em>
          </header>

          <ul class="contact-list" aria-label="联系方式列表">
            <li v-for="item in contactItems" :key="item.label" class="contact-item">
              <component
                :is="item.href ? 'a' : 'div'"
                class="contact-item__link"
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
              >
                <span class="contact-item__icon" :data-emoji="item.emoji" aria-hidden="true">
                  <img v-if="item.icon" :src="item.icon" :alt="item.label + '图标'" />
                </span>
                <div class="contact-item__content">
                  <strong class="contact-item__label">{{ item.label }}：</strong>
                  <span class="contact-item__value">{{ item.value }}</span>
                  <span v-if="item.badge" class="contact-item__badge">{{ item.badge }}</span>
                </div>
              </component>
            </li>
          </ul>

          <p class="contact-panel__note">
            如需更多服务支持，欢迎拨打热线或点击在线咨询，我们将第一时间与您联系。
          </p>
        </aside>

        <section class="map-card" aria-labelledby="map-title">
          <header class="map-card__header">
            <h2 id="map-title">山东恒仁集团总部</h2>
            <p>山东省枣庄市滕州市东郭镇辛绪村</p>
          </header>

          <figure class="map-card__figure">
            <img :src="mapImage" alt="山东恒仁集团总部位置示意图" />
            <figcaption>欢迎莅临指导，提前预约可提供园区参观服务。</figcaption>
          </figure>

          <dl class="map-card__details">
            <div class="map-card__detail">
              <dt>服务热线</dt>
              <dd>5155595</dd>
            </div>
            <div class="map-card__detail">
              <dt>销售专线</dt>
              <dd>133-5637-9916</dd>
            </div>
            <div class="map-card__detail">
              <dt>官方网站</dt>
              <dd>
                <a href="http://www.sdhrjt.net" target="_blank" rel="noopener noreferrer">www.sdhrjt.net</a>
              </dd>
            </div>
            <div class="map-card__detail">
              <dt>乘车路线</dt>
              <dd>滕州市内乘坐K609/609路到恒仁集团站。</dd>
            </div>
          </dl>

          <div class="map-card__qr" aria-label="微信公众号二维码">
            <img :src="wechatQr" alt="恒仁集团微信公众号二维码" />
            <p>关注“sdhrdf”获取更多资讯</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import mapImage from '../assets/images/damen002.jpg';
import qqIcon from '../assets/images/qq.png';
import wechatIcon from '../assets/images/wx.png';
import wechatQr from '../assets/images/wxgzh.jpg';

const contactItems = [
  {
    label: '客服',
    value: '腾讯QQ在线',
    href: 'http://wpa.qq.com/msgrd?v=3&uin=386767048&site=www.sdhrjt.net&menu=yes',
    badge: '点击咨询',
    icon: qqIcon,
    emoji: '💬',
    external: true
  },
  {
    label: '电话',
    value: '5155595',
    href: 'tel:0632-5155595',
    badge: null,
    icon: null,
    emoji: '☎️',
    external: false
  },
  {
    label: '销售专线',
    value: '13356379916',
    href: 'tel:13356379916',
    badge: '点击拨打',
    icon: null,
    emoji: '📞',
    external: false
  },
  {
    label: '阿里店铺',
    value: 'sdhrjt.1688.com',
    href: 'http://sdhrjt.1688.com',
    badge: '点击直达',
    icon: null,
    emoji: '🛒',
    external: true
  },
  {
    label: '网址',
    value: 'www.sdhrjt.net',
    href: 'http://www.sdhrjt.net',
    badge: null,
    icon: null,
    emoji: '🌐',
    external: true
  },
  {
    label: '微信公众号',
    value: 'sdhrdf',
    href: null,
    badge: null,
    icon: wechatIcon,
    emoji: '📱',
    external: false
  },
  {
    label: '乘车路线',
    value: '滕州市内乘坐K609/609到恒仁集团下车。',
    href: null,
    badge: null,
    icon: null,
    emoji: '🚌',
    external: false
  }
];
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #333333;
}

.top-banner {
  position: relative;
  width: 100%;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(1, 173, 168, 0.8), rgba(31, 182, 255, 0.8)),
    url('@/assets/images/damen002.jpg') center/cover no-repeat;
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

.contact-container {
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

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
  gap: clamp(24px, 6vw, 48px);
  align-items: start;
}

.contact-panel {
  background: #fff7eb;
  border-radius: 16px;
  padding: clamp(24px, 4vw, 32px);
  box-shadow: 0 18px 45px rgba(238, 162, 54, 0.18);
}

.contact-panel__header {
  text-align: left;
  margin-bottom: 20px;
}

.contact-panel__title {
  display: block;
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 600;
  color: #bf7200;
}

.contact-panel__subtitle {
  display: block;
  margin-top: 8px;
  font-size: 15px;
  color: rgba(191, 114, 0, 0.8);
  letter-spacing: 0.08em;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-item {
  border-top: 1px dashed rgba(191, 114, 0, 0.4);
  padding-top: 12px;
}

.contact-item:first-child {
  border-top: none;
  padding-top: 0;
}

.contact-item__link {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.contact-item__link:hover .contact-item__value,
.contact-item__link:hover .contact-item__badge {
  color: #bf7200;
}

.contact-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 196, 112, 0.25), rgba(255, 162, 47, 0.35));
  font-size: 20px;
}

.contact-item__icon::before {
  content: attr(data-emoji);
}

.contact-item__icon img {
  max-width: 60%;
  max-height: 60%;
}

.contact-item__content {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: baseline;
  font-size: 15px;
  line-height: 1.6;
}

.contact-item__label {
  color: #333333;
}

.contact-item__value {
  color: #bf0008;
  font-weight: 600;
}

.contact-item__badge {
  padding: 2px 8px;
  border-radius: 999px;
  background-color: rgba(1, 173, 168, 0.12);
  color: #01ada8;
  font-size: 12px;
}

.contact-panel__note {
  margin-top: 24px;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(51, 51, 51, 0.8);
}

.map-card {
  background: #fdfdfd;
  border-radius: 16px;
  padding: clamp(24px, 4vw, 36px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
  display: grid;
  gap: 24px;
}

.map-card__header h2 {
  margin: 0;
  font-size: clamp(22px, 3.5vw, 30px);
  font-weight: 600;
  color: #01ada8;
}

.map-card__header p {
  margin: 8px 0 0;
  color: #666666;
  font-size: 15px;
}

.map-card__figure {
  margin: 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(1, 173, 168, 0.12);
  position: relative;
}

.map-card__figure img {
  display: block;
  width: 100%;
  height: auto;
}

.map-card__figure figcaption {
  margin: 0;
  padding: 12px 16px;
  background: rgba(1, 173, 168, 0.08);
  font-size: 14px;
  color: #016a67;
}

.map-card__details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.map-card__detail dt {
  font-weight: 600;
  color: #414141;
  margin-bottom: 4px;
}

.map-card__detail dd {
  margin: 0;
  color: #666666;
  font-size: 14px;
}

.map-card__detail a {
  color: #01ada8;
  text-decoration: none;
}

.map-card__detail a:hover {
  text-decoration: underline;
}

.map-card__qr {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 196, 112, 0.16);
}

.map-card__qr img {
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 8px;
}

.map-card__qr p {
  margin: 0;
  color: #bf7200;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-panel {
    order: 2;
  }

  .map-card {
    order: 1;
  }
}

@media (max-width: 600px) {
  .contact-container {
    padding: 32px 0 56px;
  }

  .map-card__qr {
    flex-direction: column;
    text-align: center;
  }

  .map-card__figure figcaption {
    font-size: 13px;
  }

  .contact-panel__note {
    font-size: 13px;
  }
}
</style>
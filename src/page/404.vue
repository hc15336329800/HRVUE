<template>
  <div class="upgrade-wrap">
    <div class="upgrade-box">
      <svg class="spinner" viewBox="0 0 50 50" aria-hidden="true">
        <circle class="track" cx="25" cy="25" r="20"></circle>
        <circle class="arc" cx="25" cy="25" r="20"></circle>
      </svg>
      <h1 class="title">页面改造中</h1>
      <!-- <p class="subtitle">请稍候<span class="dots"><i></i><i></i><i></i></span></p> -->
      <!-- <div class="bar"><span class="fill"></span></div> -->
	  <p class="subtitle"><span class="dots"><i></i><i></i><i></i></span></p>
	  
      <p class="tip">预计2025-09-25完成</p>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.upgrade-wrap{min-height:50vh;display:flex;align-items:center;justify-content:center;background:#f7f8fa;color:#000;}
.upgrade-box{width:min(92vw,520px);padding:32px 24px;border-radius:16px;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08);text-align:center;}
.title{margin:12px 0 6px;font-size:22px;font-weight:700;letter-spacing:.5px;background:linear-gradient(90deg,#01ADA8,#1fb6ff);-webkit-background-clip:text;background-clip:text;color:transparent;}
.subtitle{margin:0 0 14px;color:#666666}
.tip{margin:10px 0 0;font-size:12px;color:#999}
.spinner{width:88px;height:88px;margin:0 auto 12px;display:block}
.track{fill:none;stroke:#eee;stroke-width:6}
.arc{fill:none;stroke:#01ADA8;stroke-width:6;stroke-linecap:round;stroke-dasharray:90 125;animation:spin 1.35s linear infinite, dash 1.35s ease-in-out infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes dash{0%{stroke-dasharray:1 214;stroke-dashoffset:0}50%{stroke-dasharray:120 94;stroke-dashoffset:-40}100%{stroke-dasharray:1 214;stroke-dashoffset:-214}}
.dots{display:inline-block;width:24px;text-align:left}
.dots i{display:inline-block;width:4px;height:4px;margin:0 2px;border-radius:50%;background:#01ADA8;opacity:.2;animation:blink 1.2s infinite}
.dots i:nth-child(2){animation-delay:.2s}.dots i:nth-child(3){animation-delay:.4s}
@keyframes blink{0%,80%,100%{opacity:.2}40%{opacity:1}}
.bar{position:relative;height:8px;border-radius:999px;background:#f0f2f5;overflow:hidden}
.fill{position:absolute;inset:0 auto 0 0;width:0;background:linear-gradient(90deg,#01ADA8,#22d3ee);animation:load 2.6s ease-in-out infinite}
@keyframes load{0%{width:0}60%{width:92%}100%{width:100%}}
@media (prefers-color-scheme:dark){.upgrade-wrap{background:#0b0c0e}.upgrade-box{background:#111317;box-shadow:0 8px 30px rgba(0,0,0,.35)}.track{stroke:#22252a}.tip{color:#888}}
</style>

<template>
	<footer class="site-footer">
		<div class="footer-container">
			<div class="footer-content">
				<section class="footer-column contact">
					<h3>联系我们</h3>
					<ul class="contact-list">
		<!-- 				<li>
							<a class="contact-link"
								href="http://wpa.qq.com/msgrd?v=3&uin=386767048&site=www.cactussoft.cn&menu=yes"
								target="_blank" rel="noopener">
								客服：腾讯QQ在线客服
							</a>
						</li> -->
						<li>
							<a class="contact-link" href="mailto:sdhrjt@tom.com">邮箱：sdhrjt168@163.com</a>
						</li>
						<li>
							<a class="contact-link" href="http://www.sdhrjt.net" target="_blank" rel="noopener">
								网 址：www.sdhrjt.net
							</a>
						</li>
						<li>
							<a class="contact-link" href="http://sdhrjt.1688.com" target="_blank" rel="noopener">
								阿里店铺：sdhrjt.1688.com
							</a>
						</li>
						<li>
							<span>电话：</span>
							<a class="contact-link" href="tel:0632-5155595">0632-5155595 |</a>
							<!-- <span class="divider">/</span> -->
							<a class="contact-link" href="tel:13356379916">
								13356379916<span class="badge">点击拨打</span>
							</a>
						</li>
						<li>
							<a class="contact-link" href="#">公众号：sdhrdf</a>
						</li>
						
						<li>
							<address>地 址：山东省滕州市辛绪工业园</address>
						</li>
					</ul>
				</section>

				<section class="footer-column wechat">
					<h5>微信公众号</h5>
					<div class="wechat-card">
						<span class="wechat-code">
							<img src="/src/assets/images/wxgzh.jpg" alt="微信公众号二维码" />
						</span>
						<p class="wechat-text">扫一扫 有惊喜</p>
					</div>
				</section>

				<section class="footer-column newsletter" style="    max-width: 350px;">
					<h3>Newsletter</h3>
					<p>Join our newsletter to keep informed about offers and news.</p>
					<div class="newsletter-status" role="status">{{ newsletterStatus }}</div>
					<form class="newsletter-form" @submit.prevent="handleSubscribe">
						<label class="sr-only" for="newsletter-email">电子邮件</label>
						<input id="newsletter-email" v-model="newsletterEmail" type="email" placeholder="Your mail"
							required />
						<button type="submit" class="subscribe-button">
							Subscribe
						</button>
					</form>
				</section>
			</div>

			<div class="footer-bottom">
				<p>Copyright©1999-2025, ctrip.com. All rights reserved.

				</p>
				<p>
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37048102006103"
						target="_blank" rel="noopener">
						<img src="/src/assets/images/备案图标.png" alt="备案图标" />鲁公网安备 37048102006103号<span
							class="separator">|</span>
						<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">鲁ICP备19000392号-2</a>
					</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import { 
		ref
	} from 'vue';

	const rawWechatSvg =
		'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIiByeD0iMTYiIC8+CiAgPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHJ4PSIxMiIgZmlsbD0iIzdhYTEyZiIgc3Ryb2tlPSIjNGQ2ZTFiIiBzdHJva2Utd2lkdGg9IjQiIC8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZHk9IjYiPldlQ2hhdDwvdGV4dD4KPC9zdmc+';
	const rawPoliceSvg =
		'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIzIiBmaWxsPSIjNGQ2ZTFiIiAvPgogIDxwYXRoIGQ9Ik0xMCA0bDUgM3Y0YzAgMy0yIDUtNSA3LTMtMi01LTQtNS03VjdsNS0zeiIgZmlsbD0iI2ZmZmZmZiIgLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjkiIHI9IjEuNiIgZmlsbD0iIzRkNmUxYiIgLz4KPC9zdmc+';

	const wechatQr = `data:image/svg+xml;base64,${rawWechatSvg}`;
	const policeIcon = `data:image/svg+xml;base64,${rawPoliceSvg}`;

	const newsletterEmail = ref('');
	const newsletterStatus = ref('');

	const handleSubscribe = () => {
		if (!newsletterEmail.value) {
			newsletterStatus.value = '请输入有效的邮箱地址';
			return;
		}

		newsletterStatus.value = '感谢订阅，我们会第一时间与您分享最新资讯。';
		newsletterEmail.value = '';
	};
</script>

<style scoped>
	.site-footer {
		background-color: #769f2f;
		background-image: linear-gradient(rgba(255, 255, 255, 0.1),
				rgba(0, 0, 0, 0.1));
		color: #fff;
		padding: 30px 0 16px;
		font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
	}

	.footer-container {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.footer-content {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		justify-content: space-between;
		margin-bottom: 15px;
	}


	.contact h3,
	.newsletter h3 {
		font-size: 22px;
		margin-bottom: 16px;
		font-weight: 600;
	}

	.wechat h5 {
		font-size: 18px;
		margin-bottom: 16px;
		font-weight: 600;
	}

	.contact-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.contact-list li {
		margin-bottom: 3px;
		line-height: 1.6;
	}

	.contact-link {
		color: inherit;
		text-decoration: none;
	}

	.contact-link:hover {
		text-decoration: underline;
	}

	.badge {
		display: inline-block;
		margin-left: 4px;
		padding: 0 6px;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.2);
		font-size: 12px;
		line-height: 1.4;
	}

	address {
		font-style: normal;
	}

	.divider {
		margin: 0 8px;
		opacity: 0.7;
	}

	.wechat-card {
		width: 114px;
		text-align: center;
	}

	.wechat-code {
		display: inline-block;
		border: 4px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		padding: 6px;
		background-color: rgba(255, 255, 255, 0.06);
	}

	.wechat-code img {
		display: block;
		width: 100px;
		height: 100px;
	}

	.wechat-text {
		margin-top: 12px;
		line-height: 1.3;
	}

	.newsletter p {
		margin-bottom: 12px;
	}

	.newsletter-status {
		min-height: 20px;
		margin-bottom: 12px;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.85);
	}

	.newsletter-form {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.newsletter-form input {
		flex: 1 1 180px;
		min-width: 160px;
		padding: 8px 12px;
		border-radius: 4px;
		border: none;
		font-size: 14px;
	}

	.newsletter-form input:focus {
		outline: 2px solid rgba(255, 255, 255, 0.6);
	}

	.subscribe-button {
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.2);
		color: #fff;
		font-size: 14px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.subscribe-button:hover {
		background-color: rgba(0, 0, 0, 0.35);
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.25);
		padding-top: 16px;
		text-align: center;
		font-size: 14px;
		line-height: 1.6;
	}

	.footer-bottom a {
		color: inherit;
		text-decoration: none;
	}

	.footer-bottom a:hover {
		text-decoration: underline;
	}

	.footer-bottom img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
		margin-right: 6px;
	}

	.separator {
		margin: 0 8px;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 768px) {
		.footer-column.newsletter {
					display: none;
				}
		
				.wechat h5 {
					display: none;
				}
		.footer-content {
			gap: 30px;
		}

		.wechat-card {
			margin: 0 auto;
		}
	}

	@media (max-width: 600px) {
		.footer-content {
			flex-direction: column;
		}

		.newsletter-form {
			flex-direction: column;
			align-items: stretch;
		}

		.subscribe-button {
			width: 100%;
		}
	}
	
	
	
</style>
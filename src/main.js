import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);

app.use(router);

if (window.ElementPlus) {
  app.use(window.ElementPlus);
}

app.mount('#app');
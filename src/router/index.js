import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/Index.vue')
    },
	{
	  path: '/about',
	  name: 'about',
	  component: () => import('../page/about.vue')
	}
  ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('../views/CartView.vue'),
		},
		{
			path: '/product/:id',
			name: 'productDetails',
			component: () => import('../views/ProductDetailsView.vue'),
		},
	],
});

export default router;

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useFiltersStore } from '@/stores/filters';
import IconCart from '@/components/icons/IconCart.vue';
import SearchBar from '@/components/SearchBar.vue';

const route = useRoute();
const router = useRouter()

const cart = useCartStore();
const filters = useFiltersStore();

const isHomeView = computed(() => {
	return route.name === 'home';
});

const goToCart = () => {
	router.push({ name: 'cart' });
};

const onSearch = (value: string) => {
	filters.setSearchValue(value);
};
</script>

<template>
	<div class="top-bar">
		<div class="site-logo">
			<router-link to="/">Eshop</router-link>
		</div>
		<SearchBar v-if="isHomeView" @search="onSearch" />
		<div class="action-icons">
			<div class="icon-cart-block" @click="goToCart">
				<IconCart class="icon-cart" />
				<div class="badge">{{ cart.itemsInCart }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.top-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 45px 52px 48px 45px;
}
.site-logo {
	font-size: 25px;
	font-weight: 600;
}
.site-logo a {
	text-decoration: none;
}
.site-logo a:visited {
	color: #151515;
}
.action-icons {
	display: flex;
}
.icon-cart-block {
	position: relative;
	cursor: pointer;
}
.badge {
	position: absolute;
	right: 14px;
	top: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16px;
	height: 16px;
	background: #e6704b;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	border-radius: 12px;
	font-weight: 600;
	font-size: 12px;
	color: #fff;
}
</style>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue';
import { IProduct } from '@/model/Product';
import { useFiltersStore } from '@/stores/FilterStore';
import ProductCard from '@/components/ProductCard.vue';

const API_PRODUCTS_URL = 'https://fakestoreapi.com/products';

const filters = useFiltersStore();
const isLoading = ref(true);
const products = ref<IProduct[]>([]);

const filteredProducts = computed(() => {
	if (filters.searchBarValue) {
		return products.value.filter((product: IProduct) => product.title.includes(filters.searchBarValue));
	}
	return products.value;
});

watchEffect(async () => {
	try {
		products.value = await (await fetch(API_PRODUCTS_URL)).json();
	} catch (error) {
		console.error(error)
	}
	isLoading.value = false;
});
</script>

<template>
	<div v-if="isLoading" class="loading">Loading...</div>
	<div v-else :class="$style['product-list']">
		<ProductCard 
			v-for="card in filteredProducts"
			:key="card.id"
			:card="card"
		/>
	</div>
</template>

<style module>
.product-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>

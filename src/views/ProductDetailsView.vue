<script setup lang="ts">
import { watchEffect, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { IProduct } from '@/model/Product';
import ProductDetails from '@/components/ProductDetails.vue';

const route = useRoute();
const API_PRODUCT_URL = 'https://fakestoreapi.com/products/'
const product = ref<IProduct | null>(null);
const isLoading = ref(true);

watchEffect(async () => {
	const productId = route.params.id;
	try {
		product.value = await (await fetch(`${API_PRODUCT_URL}${productId}`)).json();
	} catch (error) {
		console.error(error);
	}
	isLoading.value = false;
});
</script>

<template>
	<div v-if="isLoading" class="loading">Loading...</div>
	<ProductDetails v-else-if="product" :product="product" />
</template>

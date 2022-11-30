<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { PropType } from 'vue';
import { IProduct } from '@/model/Product';
import { useCurrency } from '@/composables/useCurrency';
import Rating from '@/components/Rating.vue';
import AddToCartButton from '@/components/AddToCartButton.vue';

const { product } = defineProps<{
    product: IProduct
}>()

const productPrice = computed((): number => {
	return product?.price ? Number(product?.price) : 0;
});

const { currency } = useCurrency(productPrice);

</script>

<template>
    <div :class="$style['product-details']">
		<div :class="$style['product-details__image']">
			<img :src="product.image" :alt="product.title" />
		</div>
		<div :class="$style['product-details__info']">
			<div :class="$style['product-details__title']">{{ product.title }}</div>
			<div :class="$style['product-details__rating']">
				<Rating :rating="product.rating.rate" />
			</div>
			<div :class="$style['product-details__description']">{{ product.description }}</div>
			<div :class="$style['product-details__footer']">
				<div :class="$style['product-details__price']">{{ currency }}</div>
				<AddToCartButton :product="product" />
			</div>
		</div>
	</div>
</template>

<style module>
.product-details {
	display: flex;
}

.product-details__image {
	width: 569px;
	height: 436px;
	border-radius: 12px;
	margin-right: 32px;
}

.product-details__image img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.product-details__info {
	width: 560px;
}

.product-details__title {
	font-weight: 600;
	font-size: 32px;
	color: #151515;
}

.product-details__rating {
	margin-top: 10px;
}

.product-details__description {
	font-family: 'Open Sans', sans-serif;
	font-size: 17px;
	color: #151515;
	margin-top: 42px;
}

.product-details__footer {
	margin-top: 40px;
	padding: 20px;
	border-radius: 12px;
	border: 1px solid #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.product-details__price {
	font-weight: 600;
	font-size: 26px;
	color: #6a983c;
}
</style>
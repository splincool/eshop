<script setup lang="ts">
import router from '@/router';
import { IProduct } from '@/model/Product';
import Rating from '@/components/Rating.vue';
import { useCurrency } from '@/composables/useCurrency';
import AddToCartButton from '@/components/AddToCartButton.vue';

const props = defineProps<{
	card: IProduct;
}>();

const { currency } = useCurrency(props.card.price);

const onCardClick = () => {
	router.push({ name: 'productDetails', params: { id: props.card.id} });
};
</script>

<template>
	<div class="product-card" @click="onCardClick">
		<div class="product-card__content">
			<div class="product-card__image">
				<img :src="card.image" :alt="card.title" />
			</div>
			<div class="product-card__title">{{ card.title }}</div>
			<div class="product-card__rating">
				<Rating :rating="card.rating.rate" />
			</div>
		</div>
		<div class="product-card__footer">
			<div class="product-card__price">{{ currency }}</div>
			<AddToCartButton :product="card" />
		</div>
	</div>
</template>

<style scoped>
.product-card {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	width: 269px;
	height: 360px;
	background: #ffffff;
	border: 1px solid #d1d1d1;
	border-radius: 12px;
	margin-right: 32px;
	margin-bottom: 48px;
	cursor: pointer;
}
.product-card__content {
	flex: 1;
}
.product-card__image {
	width: 237px;
	height: 180px;
	border-radius: 12px;
}
.product-card__image img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.product-card__title {
	font-weight: 500;
	font-size: 15px;
	color: #151515;
	margin-top: 16px;
	width: 236px;
	height: 45px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.product-card__footer {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
}
.product-card__price {
	font-weight: 600;
	font-size: 18px;
}
</style>

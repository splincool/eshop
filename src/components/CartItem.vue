<script setup lang="ts">
import { IProduct } from '@/model/Product';
import { useCurrency } from '@/composables/useCurrency';
import { useRouter } from 'vue-router';
import Rating from '@/components/Rating.vue';
import IconClose from '@/components/icons/IconClose.vue';

const props = defineProps<{
	cartItem: IProduct;
}>();

const emit = defineEmits<{
	(e: 'remove', id: number): void;
}>();

const router = useRouter();

const { currency } = useCurrency(props.cartItem.price);

const onCloseClick = () => {
	emit('remove', props.cartItem.id);
};

const goToDetails = () => {
	router.push({ name: 'productDetails', params: { id: props.cartItem.id }})
};
</script>

<template>
	<div :class="$style['shopping-cart__item']">
		<div :class="$style['shopping-cart__image']">
			<img :src="cartItem.image" :alt="cartItem.title"/>
		</div>
		<div :class="$style['shopping-cart__details']">
			<div :class="$style['shopping-cart__details-title']">{{ cartItem.title }}</div>
			<div :class="$style['shopping-cart__details-category']">{{ cartItem.category }}</div>
			<div :class="$style['shopping-cart__details-rating']">
				<Rating :rating="cartItem.rating.rate" />
			</div>
			<div :class="$style['shopping-cart__details-price']">{{ currency }}</div>
			<div :class="$style['shopping-cart__details-link']" @click="goToDetails">
				Show details
			</div>
		</div>
		<div :class="$style['shopping-cart__item-remove']">
			<IconClose @click="onCloseClick" />
		</div>
	</div>
</template>

<style module>
.shopping-cart__item {
	display: flex;
	padding: 16px;
	border-bottom: 1px solid #ebebeb;
	position: relative;
}

.shopping-cart__image {
	width: 237px;
	height: 180px;
	border-radius: 12px;
	margin-right: 16px;
}

.shopping-cart__image img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

.shopping-cart__details-title {
	font-weight: 500;
	font-size: 15px;
	color: #151515;
}

.shopping-cart__details-category {
	font-family: Open Sans, sans-serif;
	font-weight: 400;
	font-size: 12px;
	margin-top: 4px;
}

.shopping-cart__details-rating {
	margin-top: 12px;
}

.shopping-cart__details-price {
	margin-top: 17px;
	font-weight: 600;
	font-size: 18px;
	color: #6a983c;
}

.shopping-cart__details-link {
	margin-top: 20px;
	font-size: 12px;
	cursor: pointer;
	text-decoration: underline;
}

.shopping-cart__item-remove {
	position: absolute;
	top: 16px;
	right: 16px;
	cursor: pointer;
}
</style>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useCartStore } from '@/stores/CartStore';
import { useCurrency } from '@/composables/useCurrency';
import CartItem from '@/components/CartItem.vue';

const cart = useCartStore();

const totalPrice = computed(() => {
	return cart.totalPrice;
});

const { currency } = useCurrency(totalPrice);

const onRemove = (id: number) => {
	cart.deleteFromCart(id);
};
</script>

<template>
	<div :class="$style['shopping-cart']">
		<div :class="$style['shopping-cart__title']">Shopping Cart</div>
		<div :class="$style['shopping-cart__list']">
			<CartItem
				v-for="item in cart.items"
				:key="item.id"
				:cart-item="item"
				@remove="onRemove"
			/>
		</div>
		<div :class="$style['shopping-cart__total-price']">
			<div :class="$style['total-price__title']">Total price:</div>
			<div :class="$style['total-price__value']">{{ currency }}</div>
		</div>
	</div>
</template>

<style module>
.shopping-cart {
	padding-bottom: 50px;
}

.shopping-cart__title {
	font-weight: 600;
	font-size: 26px;
	color: #151515;
}

.shopping-cart__list {
	margin-top: 24px;
}

.shopping-cart__total-price {
	margin-top: 20px;
}

.total-price__title {
	font-weight: 600;
	font-size: 12px;
	color: #000000;
}

.total-price__value {
	font-weight: 600;
	font-size: 26px;
	color: #151515;
	margin-top: 8px;
}
</style>

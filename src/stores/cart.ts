import { defineStore } from 'pinia';
import { IProduct } from '@/model/Product';

export const useCartStore = defineStore({
	id: 'cart',
	state: () => ({
		items: [] as IProduct[],
	}),
	getters: {
		itemsInCart: (state) => state.items.length,
		totalPrice: (state) =>
			state.items.reduce((total, item) => {
				return total + Number(item.price);
			}, 0),
	},
	actions: {
		addToCart(item: IProduct) {
			this.items.push(item);
		},
		deleteFromCart(id: number) {
			this.items = this.items.filter(item => item.id !== id);
		},
	},
});

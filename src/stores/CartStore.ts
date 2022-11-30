import { defineStore } from 'pinia';
import { IProduct } from '@/model/Product';

type StoreShape = {
	items: IProduct[]
}

export const useCartStore = defineStore({
	id: 'CartStore',
	state: (): StoreShape => ({
		items: [],
	}),
	getters: {
		itemsInCart: (state) => state.items.length,
		totalPrice: (state) => state.items.reduce((total, item) => {
				return total + Number(item.price);
			}, 0),
		isInCart: (state) => (itemId: number) => state.items.findIndex((item) => item.id === itemId) > -1	
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

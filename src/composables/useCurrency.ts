import { computed, ComputedRef, unref } from 'vue';

export function useCurrency(price: string | number | ComputedRef<number>) {
	const currency = computed(() => {
		return Number(unref(price)).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	});

	return { currency };
}

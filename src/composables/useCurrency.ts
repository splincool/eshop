import { computed, watch, ComputedRef, unref } from 'vue';

export function useCurrency(price: string | number | ComputedRef<number>) {
	watch(() => price, (newP) => {
			console.log(newP);
		}
	);

	const currency = computed(() => {
		return Number(unref(price)).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	});

	return { currency };
}
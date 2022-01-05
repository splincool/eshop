import { defineStore } from 'pinia';

export const useFiltersStore = defineStore({
	id: 'filters',
	state: () => ({
		searchBarValue: '',
	}),
	actions: {
		setSearchValue(value: string) {
			this.searchBarValue = value;
		},
	},
});

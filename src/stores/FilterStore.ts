import { defineStore } from 'pinia';

type StoreShape = {
	searchBarValue: string
}

export const useFiltersStore = defineStore({
	id: 'FilterStore',
	state: (): StoreShape => ({
		searchBarValue: '',
	}),
	actions: {
		setSearchValue(value: string) {
			this.searchBarValue = value;
		},
	},
});

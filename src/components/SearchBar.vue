<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';

const emit = defineEmits<{
	(e: 'search', value: string): void;
}>();

const inputValue = ref('');

watchEffect(() => {
	emit('search', inputValue.value);
});
</script>

<template>
	<div :class="$style['search-bar']">
		<input
			v-model="inputValue"
			:class="$style['search-bar__input']"
			placeholder="Search products"
		/>
		<IconSearch :class="$style['search-bar__icon']" />
	</div>
</template>

<style module>
.search-bar {
	position: relative;
}

.search-bar__input {
	background: #f9f9f9;
	border: 1px solid #d1d1d1;
	box-sizing: border-box;
	border-radius: 12px;
	font-size: 14px;
	width: 350px;
	height: 40px;
	padding-left: 24px;
}

.search-bar__icon {
	position: absolute;
	top: 14px;
	right: 15px;
}
</style>

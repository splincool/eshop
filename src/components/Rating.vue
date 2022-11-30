<script setup lang="ts">
import { ref, computed } from 'vue';
import IconEmptyStar from '@/components/icons/IconEmptyStar.vue';
import IconFilledStar from '@/components/icons/IconFilledStar.vue';

const props = defineProps<{
	rating: number;
}>();

const NUMBER_OF_STARS = 5;

const roundedRating = ref<number>(Math.round(props.rating));
const emptyStarsCount = computed(() => {
	return NUMBER_OF_STARS - roundedRating.value;
})
</script>

<template>
	<IconFilledStar 
		v-for="star in roundedRating"
		:key="star" 
	/>
	<IconEmptyStar
		v-for="star in emptyStarsCount"
		:key="star"
	/>
</template>

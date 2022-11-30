<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';

</script>

<template>
	<TopBar />
	<div class="wrapper">
		<router-view />
	</div>
</template>

<style>
@import '@/assets/base.css';

.wrapper {
	width: 1260px;
	margin: 0 auto;
}

.loading {
	text-align: center;
}
</style>

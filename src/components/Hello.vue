<script setup lang="ts">
const userStore = useUserStore()

</script>

<template>
	<h1>YOUJUN</h1>

	<a-button @click="userStore.increment">{{ userStore.count }}</a-button>
</template>

<style scoped>
</style>

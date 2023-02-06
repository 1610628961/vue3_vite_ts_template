<script setup lang="ts">
import Hello from './components/Hello.vue'

const foo = ref('hi1')
</script>

<template>
	<h1>Hello</h1>
	<a-button type="primary">Primary</a-button>
	<p>{{ foo }}</p>

	<Hello></Hello>

	<RouterView></RouterView>
</template>

<style scoped></style>

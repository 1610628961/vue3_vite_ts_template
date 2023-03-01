<script setup lang="ts">
import Hello from '@/components/Hello.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

import { EnvEnum } from '@/enums/env_enum'
import {useGlobalSetting} from '@/hooks/setting/useGlobalSetting'
const globalSetting = useGlobalSetting()

console.log('EnvEnum', EnvEnum.socketUrl, globalSetting)

const foo = ref('hi1')
</script>

<template>
	<h1>Hello</h1>
	<a-button type="primary">Primary</a-button>
	<p>{{ foo }}</p>

	<Hello></Hello>

	<SvgIcon name="caihong"></SvgIcon>

	<RouterView></RouterView>
</template>

<style scoped></style>

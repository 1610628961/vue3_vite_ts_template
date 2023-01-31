import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve('src'),
			'#': resolve('types'),
		},
	},
	plugins: [
		vue(),

		// 组件按需引入
		Components({
			extensions: ['vue'],
			resolvers: [AntDesignVueResolver()],
			include: [/\.vue$/, /\.vue\?vue/],
			dts: 'types/components.d.ts',
		}),
	],
})

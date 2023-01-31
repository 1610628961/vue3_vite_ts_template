import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
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

		// 自动引入
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
			],
			imports: ['vue'],
			resolvers: [AntDesignVueResolver()],
			dts: 'types/auto-imports.d.ts',
			dirs: ['src/stores/modules'],
			vueTemplate: true, //支持Vue 模版自动引入
		}),

		// 组件自动引入
		Components({
			extensions: ['vue'],
			resolvers: [AntDesignVueResolver()],
			include: [/\.vue$/, /\.vue\?vue/],
			dts: 'types/components.d.ts',
		}),
	],
})

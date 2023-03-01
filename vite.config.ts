import { resolve } from 'path'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ command, mode, ssrBuild }) => {
	const root = process.cwd()

	const env = loadEnv(mode, root)

	const { VITE_BASE_URL, VITE_PROXY_BASE_URL } = env

	const defaultConfigs = {
		base: VITE_BASE_URL,
		resolve: {
			alias: {
				'@': resolve('src'),
				'#': resolve('types'),
			},
			extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'], //默认配置，不建议导入扩展名 .vue ，会影响类型支持
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

			//生成 svg 雪碧图
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/icons')],
				symbolId: 'icon-[dir]-[name]',
			}),
		],
	}

	switch (mode) {
		case 'development':
			Object.assign(defaultConfigs, {
				server: {
					proxy: {
						api: {
							target: VITE_PROXY_BASE_URL,
							changeOrigin: true,
							rewrite: (path) => path.replace(/^\/api/, ''),
						},
					},
				},
			})
			break
	}

	return defaultConfigs
})

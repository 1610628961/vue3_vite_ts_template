import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/stores'
import { setupRouter } from '@/routers'

// 引入vite-plugin-svg-icons 插件注册脚本
import 'virtual:svg-icons-register';

async function boostrap() {
	const app = createApp(App)

	// 配置 store
	setupStore(app)

	//配置路由
	setupRouter(app)

	app.mount('#app')
}

boostrap()

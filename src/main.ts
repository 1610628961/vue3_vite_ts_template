import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/stores'
import { setupRouter } from '@/routers'

async function boostrap() {
	const app = createApp(App)

	// 配置 store
	setupStore(app)

	//配置路由
	setupRouter(app)

	app.mount('#app')
}

boostrap()

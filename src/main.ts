import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/stores'

async function boostrap() {
	const app = createApp(App)

    // 配置 store
	setupStore(app)

	app.mount('#app')
}

boostrap()

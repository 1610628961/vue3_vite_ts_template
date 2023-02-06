import type { App } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import { constantRoutes } from '@/routers/routes/index'

export const router = createRouter({
	routes: constantRoutes,
	history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
	scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}

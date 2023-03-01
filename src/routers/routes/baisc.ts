import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/test',
		name: 'test',
		component: () => import('@/pages/test/index.vue'),
	},
]

export default constantRoutes

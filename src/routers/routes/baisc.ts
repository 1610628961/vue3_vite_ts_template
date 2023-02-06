import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/test',
		name: 'test',
		component: () => import('@/pages/Test/index.vue'),
	},
]

export default constantRoutes

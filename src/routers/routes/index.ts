import type { RouteRecordRaw } from 'vue-router'

//异步路由
export const asyncRoutes: Array<RouteRecordRaw> = []

//常量路由, 不需要经过授权，可以直接访问的路由
export { default as constantRoutes } from './baisc'

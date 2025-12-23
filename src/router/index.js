/* eslint-disable sort-keys */
import { createRouter, createWebHistory } from 'vue-router'

import { ROUTES_EMPTY_LAYOUT } from '@/utils/constants'
import runMiddlewares from '@/middlewares/handler/runner'

const routes = [
	{
		path: '/',
		name: 'home',
		meta: { noAuth: true },
		component: () => import('@/pages/Home.vue'),
	},
	{
		path: '/about',
		name: 'about',
		meta: { noAuth: true },
		component: () => import('@/pages/About.vue'),
	},
	{
		path: '/:pathMatch(.*)*', // Catch-all route for undefined paths
		name: 'notFound',
		meta: { noAuth: true },
		component: () => import('@/pages/404.vue'),
	},
]

const files = import.meta.glob('./**/*.routes.js', { eager: true })
Object.entries(files).forEach(([, definition]) => {
	routes.push(...definition.default)
})

for (const route of routes) {
	// eslint-disable-next-line no-unused-vars
	for (const key in route) {
		const meta = route.meta || {}
		if (!meta.layout) {
			meta.layout = !ROUTES_EMPTY_LAYOUT.includes(route.name || route.path) ? 'main' : 'empty'
		}
		route.meta = meta
	}
}

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active router-link-active',
	routes,
})

router.beforeEach(runMiddlewares(router))

export default router

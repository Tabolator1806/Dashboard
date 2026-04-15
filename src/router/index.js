import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const NotFoundView = () => import("@/views/NotFoundView.vue")

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path:'/',
			name:'home',
			component: HomeView
		},
		{
			path:'/:pathMatch(.*)*',
			name:'Page not found',
			component: NotFoundView
		}
	]
})
export default router

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createBootstrap } from 'bootstrap-vue-next'

import { createHead } from '@unhead/vue/client'

import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

import { APP_ID, APP_NAME } from '@/utils/constants'

import { findLocale } from './i18n'
import router from '../router'

export default function(app) {
	app.use(createBootstrap())
		
	const head = createHead({
		init: [
			{
				htmlAttrs: { lang: findLocale() },
				title: APP_NAME,
				titleTemplate: `%s | ${APP_NAME}`,
			},
		],
	})
	app.use(head)
		
	const pinia = createPinia()
	pinia.use(createPersistedState({ key: (id) => `${APP_ID}.${id}` }))
	app.use(pinia)

	app.use(router)

	return app
}

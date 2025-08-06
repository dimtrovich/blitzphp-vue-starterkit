import { createI18n } from 'vue-i18n'

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '../utils/constants'
import { $storage } from './storage'

const messages = loadLocaleMessages()

export const i18n = createI18n({
	legacy: false, // you must set `false`, to use Composition API
	locale: findLocale(),
	messages,
})

export const $i18n = { ...i18n.global }

export const { t: $t } = $i18n

export function changeLanguage(language) {
	$storage.cookie.set('locale', language)
	// eslint-disable-next-line no-undef
	document.querySelector('html').setAttribute('lang', language)

	i18n.global.locale = language
	$i18n.locale       = language
}

export default function(app) {
	app.use(i18n)

	return app
}

/**
 * Recupere la langue a utilier par defaut
 *
 * @return {String}
 */
export function findLocale() {
	let lang = $storage.cookie.get('locale')

	if (lang == null || lang == undefined || !lang || typeof lang == 'undefined') {
		// eslint-disable-next-line no-undef
		lang = (window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage).substr(0, 2).toLowerCase()
	}

	if (!AVAILABLE_LOCALES.includes(lang)) {
		lang = DEFAULT_LOCALE
	}

	return lang
}

function loadLocaleMessages() {
	const messages = {}
	const files = import.meta.glob('../translations/**/*.json', { eager: true })

	Object.entries(files).forEach(([path, definition]) => {
		const parts = path.split('/')
		const locale = parts[2]
		const namespace = parts.at(-1).replace('.json', '')
		if (!messages[locale]) {
			messages[locale] = {}
		}
		if (!messages[locale][namespace]) {
			messages[locale][namespace] = {}
		}
		const message = definition?.default
		messages[locale][namespace] = { ...messages[locale][namespace], ...message }
	})

	return messages
}

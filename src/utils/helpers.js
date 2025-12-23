import { is_string } from 'php-in-js/modules/types'
import { trim } from 'php-in-js/modules/string'

import { LOGIN_NOT_REDIRECTABLE } from './constants'
import router from '@/router'

/**
 * Regroupe un tableau d'objet par cle
 *
 * @param {Object[]} array
 * @param {String} key
 * @returns {Object}
 */
export function groupBy(array, key) {
	return array.reduce(function(r, a) {
		r[a[key]] = r[a[key]] || []
		r[a[key]].push(a)

		return r
	}, Object.create(null))
}

/**
 * Determine l'url complete d'une route en fonction de son path
 *
 * @param {string|object} to
 * @returns {string}
 */
export function resolveRoutePath(to) {
	if (is_string(to)) {
		to = { path: to }
	}

	return router.resolve(to).href
}

/**
 * Verifie si l'url courrante peut etre redirigée vers le login ou pas
 */
export function isLoginRedirectable() {
	const currentUrl     = trim(window.location.pathname, '/')

	for (const path of LOGIN_NOT_REDIRECTABLE) {
		if (currentUrl.startsWith(path)) {
			return false
		}
	}

	return true
}

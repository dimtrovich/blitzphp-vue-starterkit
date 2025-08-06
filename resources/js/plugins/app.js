import php from 'php-in-js'

export const $asset  = (path) => new URL(`../assets/${path}`, import.meta.url).href
export const $php    = php
export const $public = (path) => `${$php.trim(window.location.origin, '/')}/${$php.trim(path, '/')}`

export default function(app) {
	app.use({
		install(app) {
			app.config.globalProperties.$asset  = $asset
			app.config.globalProperties.$public = $public
			app.config.globalProperties.$php    = $php
		},
	})

	return app
}

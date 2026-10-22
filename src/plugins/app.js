import php from 'php-in-js'

import { $asset, $currencyFormat, $public } from '@/utils/functions'

export const $php = php

export default function(app) {
	app.use({
		install(app) {
			app.config.globalProperties.$asset          = $asset
			app.config.globalProperties.$currencyFormat = $currencyFormat
			app.config.globalProperties.$public         = $public
			app.config.globalProperties.$php            = $php
		},
	})

	return app
}

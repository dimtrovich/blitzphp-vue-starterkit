import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import 'dayjs/locale/fr'
import 'dayjs/locale/en'

import { APP_TIMEZONE, AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/constants'
import { $i18n } from './i18n'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault(APP_TIMEZONE)

dayjs.extend(customParseFormat)
dayjs.extend(duration)
dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(relativeTime)


let { locale } = $i18n
if (!AVAILABLE_LOCALES.includes(locale)) {
	locale = DEFAULT_LOCALE
}
dayjs.locale(locale)

let userTimezone = APP_TIMEZONE

export const setUserTimezone = (timezone) => {
	userTimezone = timezone
}

export const $dayjs = (...args) => dayjs(...args).tz(userTimezone).locale(document.querySelector('html').getAttribute('lang'))
export const { duration: $duration } = dayjs


export default function(app) {
	app.use({
		install(app) {
			app.config.globalProperties.$dayjs    = $dayjs
			app.config.globalProperties.$duration = $duration
			app.config.globalProperties.dayjs     = dayjs
		},
	})

	return app
}

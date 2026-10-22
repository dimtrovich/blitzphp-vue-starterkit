// Créer un dictionnaire de tous les assets au moment du build
const assets = import.meta.glob('../assets/**/*', { eager: true, query: '?url', import: 'default' })

export const $asset = (path) => {
	const key = `../assets/${path}`
	return assets[key] || ''
}

export const $public = (path) => {
	return `${$php.trim(window.location.origin, '/')}/${$php.trim(path, '/')}`
}

export const $currencyFormat = (value, currency = 'XAF') => {
	return new Intl.NumberFormat('fr', { currency, style: 'currency' }).format(value)
}

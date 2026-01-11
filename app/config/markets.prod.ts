import type { MarketsRecord } from './marketsSchema'

export const markets: MarketsRecord = {
	SP_US: {
		code: 'SP_US',
		country: 'US',
		defaultLanguage: 'en',
		apiBaseUrl: 'https://api.tvmaze.com',
	},
	SP_MX: {
		code: 'SP_MX',
		country: 'MX',
		defaultLanguage: 'es',
		apiBaseUrl: 'https://api.tvmaze.com',
	},
}

import { markets as devMarkets } from './markets.dev'
import { markets as prodMarkets } from './markets.prod'
import type { MarketCode, MarketConfig, MarketsRecord } from './marketsSchema'

function getMarkets(): MarketsRecord {
	return process.env.NODE_ENV === 'production' ? prodMarkets : devMarkets
}

function getMarketCode(): MarketCode {
	const markets = getMarkets()
	const market = process.env.NEXT_PUBLIC_MARKET as MarketCode | undefined

	if (!market || !markets[market]) {
		throw new Error(`Invalid or missing NEXT_PUBLIC_MARKET: "${market}"`)
	}
	return market
}

export function getConfig(): MarketConfig {
	return getMarkets()[getMarketCode()]
}

// Export for convenience
export const config = getConfig()
export type { MarketCode, MarketConfig }

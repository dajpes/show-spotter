import { z } from 'zod'

export const MarketCodeSchema = z.enum(['SP_US', 'SP_MX'])

export const MarketConfigSchema = z.object({
	code: MarketCodeSchema,
	country: z.string(),
	defaultLanguage: z.enum(['en', 'es']),
	apiBaseUrl: z.url(),
})

export const MarketsRecordSchema = z.record(
	MarketCodeSchema,
	MarketConfigSchema,
)

export type MarketCode = z.infer<typeof MarketCodeSchema>
export type MarketConfig = z.infer<typeof MarketConfigSchema>
export type MarketsRecord = z.infer<typeof MarketsRecordSchema>

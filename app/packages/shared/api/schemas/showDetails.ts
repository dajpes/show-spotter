import { z } from 'zod'

export const ShowDetailsSchema = z.object({
	id: z.number(),
	url: z.string(),
	name: z.string(),
	type: z.string(),
	language: z.string().nullable(),
	genres: z.array(z.string()),
	status: z.string(),
	runtime: z.number().nullable(),
	averageRuntime: z.number().nullable(),
	premiered: z.string().nullable(),
	ended: z.string().nullable(),
	officialSite: z.string().nullable(),
	schedule: z.object({
		time: z.string(),
		days: z.array(z.string()),
	}),
	rating: z.object({
		average: z.number().nullable(),
	}),
	network: z
		.object({
			id: z.number(),
			name: z.string(),
			country: z
				.object({
					name: z.string(),
					code: z.string(),
					timezone: z.string(),
				})
				.nullable(),
			officialSite: z.string().nullable(),
		})
		.nullable(),
	webChannel: z
		.object({
			id: z.number(),
			name: z.string(),
			country: z
				.object({
					name: z.string(),
					code: z.string(),
					timezone: z.string(),
				})
				.nullable(),
			officialSite: z.string().nullable(),
		})
		.nullable(),
	image: z
		.object({
			medium: z.string(),
			original: z.string(),
		})
		.nullable(),
	summary: z.string().nullable(),
})

export type ShowDetailsResponse = z.infer<typeof ShowDetailsSchema>

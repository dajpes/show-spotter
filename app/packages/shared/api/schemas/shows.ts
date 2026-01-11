import { z } from 'zod'

const ShowSchema = z.object({
	id: z.number(),
	name: z.string(),
	type: z.string(),
	genres: z.array(z.string()),
	status: z.string(),
	image: z
		.object({
			medium: z.string(),
			original: z.string(),
		})
		.nullable(),
	summary: z.string().nullable(),
})

const ScheduleItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	season: z.number(),
	number: z.number().nullable(),
	airdate: z.string(),
	airstamp: z.string(),
	runtime: z.number().nullable(),
	_embedded: z.object({
		show: ShowSchema,
	}),
})

export const ScheduleResponseSchema = z.array(ScheduleItemSchema)

export type Show = z.infer<typeof ShowSchema>
export type ScheduleItem = z.infer<typeof ScheduleItemSchema>
export type ScheduleResponse = z.infer<typeof ScheduleResponseSchema>

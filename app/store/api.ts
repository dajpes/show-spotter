import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/app/config'
import type { ShowDetailsResponse } from '@/app/packages/shared/api/schemas/showDetails'

interface Show {
	id: number
	name: string
	genres: string[]
	image: {
		medium: string
		original: string
	} | null
	summary: string
	rating: {
		average: number | null
	}
}

interface SearchResult {
	score: number
	show: Show
}

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
	endpoints: (builder) => ({
		searchShows: builder.query<SearchResult[], string>({
			query: (searchTerm) =>
				`/search/shows?q=${encodeURIComponent(searchTerm)}`,
		}),
		shows: builder.query<SearchResult[], void>({
			query: () => `/schedule/web?country=US`,
		}),
		getShowById: builder.query<ShowDetailsResponse, string>({
			query: (id) => `/shows/${id}`,
		}),
	}),
})

export const { useSearchShowsQuery, useGetShowByIdQuery } = api

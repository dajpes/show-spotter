import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/app/config'
import type { ShowDetailsResponse } from '@/app/packages/shared/api/schemas/showDetails'
import type { Show } from '@/app/packages/shared/api/schemas/shows'

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
		getShows: builder.query<Show[], number>({
			query: (page) => `/shows?page=${page}`,
		}),
		getShowById: builder.query<ShowDetailsResponse, string>({
			query: (id) => `/shows/${id}`,
		}),
	}),
})

export const { useSearchShowsQuery, useGetShowsQuery, useGetShowByIdQuery } =
	api

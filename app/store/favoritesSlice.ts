'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Show } from '@/app/packages/shared/api/schemas/shows'

interface FavoritesState {
	shows: Show[]
	isLoading: boolean
}

const initialState: FavoritesState = {
	shows: [],
	isLoading: true,
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<Show>) => {
			const index = state.shows.findIndex(
				(show) => show.id === action.payload.id,
			)

			// If the show is already in the favorites list, remove it
			if (index >= 0) {
				state.shows = [...state.shows].filter(
					(show) => show.id !== action.payload.id,
				)
			} else {
				state.shows.push(action.payload)
			}
		},
		loadFavorites: (state, action: PayloadAction<Show[]>) => {
			state.shows = action.payload
			state.isLoading = false
		},
		setInitialized: (state) => {
			state.isLoading = false
		},
	},
})

// Action Dispatchers
export const { toggleFavorite, loadFavorites, setInitialized } =
	favoritesSlice.actions

// Selectors
export const selectFavorites = (state: { favorites: FavoritesState }) =>
	state.favorites.shows

export const selectFavoritesCount = (state: { favorites: FavoritesState }) =>
	state.favorites.shows.length

export const selectIsFavorite =
	(id: number) => (state: { favorites: FavoritesState }) =>
		state.favorites.shows.some((show) => show.id === id)

export const isFavoritesLoading = (state: { favorites: FavoritesState }) =>
	state.favorites.isLoading

export default favoritesSlice.reducer

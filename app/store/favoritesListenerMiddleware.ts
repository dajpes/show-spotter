'use client'

import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { toggleFavorite } from '@/app/store/favoritesSlice'
import type { RootState } from '@/app/store/store'

export const FAVORITES_STORAGE_KEY = 'showspotter_favorites'

export const favoritesListenerMiddleware = createListenerMiddleware()

favoritesListenerMiddleware.startListening({
	matcher: isAnyOf(toggleFavorite),
	effect: (_action, listenerApi) => {
		const state = listenerApi.getState() as RootState
		try {
			localStorage.setItem(
				FAVORITES_STORAGE_KEY,
				JSON.stringify(state.favorites.shows),
			)
		} catch {
			// Silent fail - localStorage may be unavailable or full
		}
	},
})

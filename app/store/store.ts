'use client'

import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/app/store/api'
import { favoritesListenerMiddleware } from '@/app/store/favoritesListenerMiddleware'
import favoritesReducer from '@/app/store/favoritesSlice'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		favorites: favoritesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.prepend(favoritesListenerMiddleware.middleware)
			.concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

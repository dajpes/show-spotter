'use client'

import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ShowsPageSchema } from '@/app/packages/shared/api/schemas/shows'
import { FAVORITES_STORAGE_KEY } from '@/app/store/favoritesListenerMiddleware'
import { loadFavorites, setInitialized } from '@/app/store/favoritesSlice'

/**
 * Hook to load favorites from localStorage on initial mount.
 * Persistence is handled by favoritesListenerMiddleware for better performance.
 * Uses Zod validation to ensure localStorage data hasn't been tampered with.
 */
export function useFavoritesSync() {
	const dispatch = useDispatch()
	const isInitialized = useRef(false)

	useEffect(() => {
		if (isInitialized.current) return
		isInitialized.current = true

		try {
			const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
			if (stored) {
				const parsed = JSON.parse(stored)
				const result = ShowsPageSchema.safeParse(parsed)

				if (result.success) {
					dispatch(loadFavorites(result.data))
					return
				}
				// Invalid data in localStorage - clear it to prevent future issues
				localStorage.removeItem(FAVORITES_STORAGE_KEY)
			}
		} catch {
			// Silent fail - localStorage may be unavailable or JSON invalid
		}

		// Always mark as initialized, even if no favorites found or validation failed
		dispatch(setInitialized())
	}, [dispatch])
}

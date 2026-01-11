import { configureStore } from '@reduxjs/toolkit'
import type { Show } from '@/app/packages/shared/api/schemas/shows'
import favoritesReducer, {
	isFavoritesLoading,
	loadFavorites,
	selectFavorites,
	selectFavoritesCount,
	selectIsFavorite,
	setInitialized,
	toggleFavorite,
} from './favoritesSlice'

function createMockShow(overrides: Partial<Show> = {}): Show {
	const id = Math.floor(Math.random() * 1000000)
	return {
		id,
		name: `Test Show ${id}`,
		type: 'Scripted',
		genres: ['Drama', 'Thriller'],
		status: 'Running',
		rating: { average: 8.5 },
		image: {
			medium: 'https://example.com/medium.jpg',
			original: 'https://example.com/original.jpg',
		},
		summary: '<p>A test show summary</p>',
		...overrides,
	}
}

// Helper to create a fresh store for each test
function createTestStore() {
	return configureStore({
		reducer: { favorites: favoritesReducer },
	})
}

describe('favoritesSlice', () => {
	describe('initial state', () => {
		it('should have empty shows array', () => {
			const store = createTestStore()
			expect(store.getState().favorites.shows).toEqual([])
		})

		it('should have isLoading set to true', () => {
			const store = createTestStore()
			expect(store.getState().favorites.isLoading).toBe(true)
		})
	})

	describe('toggleFavorite', () => {
		it('should add a show when not in favorites', () => {
			const store = createTestStore()
			const show = createMockShow()

			expect(store.getState().favorites.shows).toHaveLength(0)

			store.dispatch(toggleFavorite(show))

			expect(store.getState().favorites.shows).toHaveLength(1)
			expect(store.getState().favorites.shows[0]).toEqual(show)
		})

		it('should remove a show when already in favorites', () => {
			const store = createTestStore()
			const show = createMockShow()

			store.dispatch(toggleFavorite(show))
			expect(store.getState().favorites.shows).toHaveLength(1)

			store.dispatch(toggleFavorite(show))
			expect(store.getState().favorites.shows).toHaveLength(0)
		})

		it('should not affect other shows when removing', () => {
			const store = createTestStore()
			const show1 = createMockShow()
			const show2 = createMockShow()

			store.dispatch(toggleFavorite(show1))
			store.dispatch(toggleFavorite(show2))
			expect(store.getState().favorites.shows).toHaveLength(2)

			store.dispatch(toggleFavorite(show1))

			expect(store.getState().favorites.shows).toHaveLength(1)
			expect(store.getState().favorites.shows[0]).toEqual(show2)
		})

		it('should add multiple different shows', () => {
			const store = createTestStore()
			const show1 = createMockShow()
			const show2 = createMockShow()

			store.dispatch(toggleFavorite(show1))
			store.dispatch(toggleFavorite(show2))

			expect(store.getState().favorites.shows).toHaveLength(2)
			expect(store.getState().favorites.shows).toContainEqual(show1)
			expect(store.getState().favorites.shows).toContainEqual(show2)
		})
	})

	describe('loadFavorites', () => {
		it('should load an array of shows', () => {
			const store = createTestStore()
			const show1 = createMockShow()
			const show2 = createMockShow()

			store.dispatch(loadFavorites([show1, show2]))

			expect(store.getState().favorites.shows).toHaveLength(2)
			expect(store.getState().favorites.shows).toEqual([show1, show2])
		})

		it('should set isLoading to false', () => {
			const store = createTestStore()

			expect(store.getState().favorites.isLoading).toBe(true)

			store.dispatch(loadFavorites([]))

			expect(store.getState().favorites.isLoading).toBe(false)
		})

		it('should replace existing shows', () => {
			const store = createTestStore()
			const show1 = createMockShow()
			const show2 = createMockShow()

			store.dispatch(loadFavorites([show1]))
			expect(store.getState().favorites.shows).toEqual([show1])

			store.dispatch(loadFavorites([show2]))

			expect(store.getState().favorites.shows).toHaveLength(1)
			expect(store.getState().favorites.shows[0]).toEqual(show2)
		})
	})

	describe('setInitialized', () => {
		it('should set isLoading to false', () => {
			const store = createTestStore()

			expect(store.getState().favorites.isLoading).toBe(true)

			store.dispatch(setInitialized())

			expect(store.getState().favorites.isLoading).toBe(false)
		})

		it('should not modify shows array', () => {
			const store = createTestStore()
			const show = createMockShow()

			store.dispatch(toggleFavorite(show))
			expect(store.getState().favorites.shows).toEqual([show])

			store.dispatch(setInitialized())

			expect(store.getState().favorites.shows).toEqual([show])
		})
	})

	describe('selectors', () => {
		describe('selectFavorites', () => {
			it('should return the shows array', () => {
				const store = createTestStore()
				const show1 = createMockShow()
				const show2 = createMockShow()
				store.dispatch(loadFavorites([show1, show2]))

				expect(selectFavorites(store.getState())).toEqual([show1, show2])
			})

			it('should return empty array when no favorites', () => {
				const store = createTestStore()

				expect(selectFavorites(store.getState())).toEqual([])
			})
		})

		describe('selectFavoritesCount', () => {
			it('should return correct count', () => {
				const store = createTestStore()
				const show1 = createMockShow()
				const show2 = createMockShow()
				store.dispatch(loadFavorites([show1, show2]))

				expect(selectFavoritesCount(store.getState())).toBe(2)
			})

			it('should return 0 when no favorites', () => {
				const store = createTestStore()

				expect(selectFavoritesCount(store.getState())).toBe(0)
			})
		})

		describe('selectIsFavorite', () => {
			it('should return true when show is in favorites', () => {
				const store = createTestStore()
				const show = createMockShow()
				store.dispatch(toggleFavorite(show))

				expect(selectIsFavorite(show.id)(store.getState())).toBe(true)
			})

			it('should return false when show is not in favorites', () => {
				const store = createTestStore()
				const show = createMockShow()
				store.dispatch(toggleFavorite(show))

				expect(selectIsFavorite(999)(store.getState())).toBe(false)
			})

			it('should return false for empty favorites', () => {
				const store = createTestStore()
				const show = createMockShow()

				expect(selectIsFavorite(show.id)(store.getState())).toBe(false)
			})
		})

		describe('isFavoritesLoading', () => {
			it('should return true when loading', () => {
				const store = createTestStore()

				expect(isFavoritesLoading(store.getState())).toBe(true)
			})

			it('should return false when not loading', () => {
				const store = createTestStore()
				store.dispatch(setInitialized())

				expect(isFavoritesLoading(store.getState())).toBe(false)
			})
		})
	})
})

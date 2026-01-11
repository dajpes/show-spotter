'use client'

import { Provider } from 'react-redux'
import { useFavoritesSync } from '@/app/packages/shared/hooks/useFavoritesSync'
import { store } from '@/app/store/store'

function FavoritesSyncProvider({ children }: { children: React.ReactNode }) {
	useFavoritesSync()
	return <>{children}</>
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<FavoritesSyncProvider>{children}</FavoritesSyncProvider>
		</Provider>
	)
}

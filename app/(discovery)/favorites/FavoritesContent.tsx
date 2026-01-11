'use client'

import { HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useSelector } from 'react-redux'
import DiscoveryLayoutShell from '@/app/packages/discovery/components/Layout/DiscoveryLayoutShell'
import { ShowsSection } from '@/app/packages/discovery/components/ShowsDisplay'
import { isFavoritesLoading, selectFavorites } from '@/app/store/favoritesSlice'

export default function FavoritesContent() {
	const __ = useTranslations()
	const favorites = useSelector(selectFavorites)
	const isLoading = useSelector(isFavoritesLoading)

	if (isLoading) {
		return (
			<DiscoveryLayoutShell>
				<div className="flex flex-col items-center justify-center gap-4 mt-20">
					<h1 className="text-2xl font-bold">{__('favorites.loading')}</h1>
				</div>
			</DiscoveryLayoutShell>
		)
	}
	if (favorites.length === 0) {
		return (
			<DiscoveryLayoutShell>
				<div className="flex flex-col items-center justify-center gap-4 mt-20">
					<HeartIcon className="w-16 h-16 text-gray-300 dark:text-gray-600" />
					<h1 className="text-2xl font-bold">{__('favorites.empty')}</h1>
					<p className="text-muted-foreground">{__('favorites.emptyHint')}</p>
					<Link
						href="/"
						className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
					>
						{__('shows.browseShows')}
					</Link>
				</div>
			</DiscoveryLayoutShell>
		)
	}

	return (
		<DiscoveryLayoutShell>
			<ShowsSection shows={favorites} title={__('favorites.title')} />
		</DiscoveryLayoutShell>
	)
}

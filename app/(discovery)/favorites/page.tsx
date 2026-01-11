import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FavoritesContent from './FavoritesContent'

export async function generateMetadata(): Promise<Metadata> {
	const __ = await getTranslations()
	return {
		title: `${__('favorites.title')} | ShowSpotter`,
	}
}

export default function FavoritesPage() {
	return <FavoritesContent />
}

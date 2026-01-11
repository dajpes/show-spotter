import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FetchSearchResults from '@/app/packages/discovery/components/FetchSearchResults'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
	const { q: query = '' } = await searchParams
	const __ = await getTranslations()
	return {
		title: `${__('search.resultsFor', { query })} | ShowSpotter`,
	}
}

export default function SearchPage() {
	return (
		<DiscoveryLayout>
			<FetchSearchResults />
		</DiscoveryLayout>
	)
}

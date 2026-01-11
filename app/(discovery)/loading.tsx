import { useTranslations } from 'next-intl'
import DiscoveryLayoutShell from '../packages/discovery/components/Layout/DiscoveryLayoutShell'
import CardSkeleton from '../packages/discovery/components/ShowCard/CardSkeleton'

export default function Loading() {
	const __ = useTranslations()
	return (
		<DiscoveryLayoutShell>
			<section
				className="mx-auto"
				aria-busy="true"
				aria-label={__('shows.loading.ariaLabel')}
			>
				<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6 animate-pulse" />
				<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{Array.from({ length: 4 }).map((_, i) => (
						<CardSkeleton key={i} />
					))}
				</ul>
			</section>
		</DiscoveryLayoutShell>
	)
}

'use client'

import { useTranslations } from 'next-intl'
import ShowCard from '@/app/packages/discovery/components/ShowCard'
import type { ScheduleResponse } from '@/app/packages/shared/api/schemas/shows'

export function ShowsSection({ shows }: { shows: ScheduleResponse }) {
	const __ = useTranslations()
	return (
		<section className="mx-auto">
			<h1 className="text-2xl font-bold mb-6">{__('shows.todaysShows')}</h1>
			<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{shows.map((item) => (
					<li key={item.id}>
						<ShowCard item={item} />
					</li>
				))}
			</ul>
		</section>
	)
}

export function NoShowsFound() {
	const __ = useTranslations()
	return (
		<div className="flex flex-col items-center justify-center gap-4 mt-20">
			<p className="text-muted-foreground text-lg">{__('shows.notFound')}</p>
		</div>
	)
}

export function ShowsError({ onRetry }: { onRetry: () => void }) {
	const __ = useTranslations()
	return (
		<div className="flex flex-col items-center justify-center gap-4 mt-20">
			<h2 className="text-xl font-semibold text-red-600">
				{__('shows.error.title')}
			</h2>
			<button
				type="button"
				onClick={onRetry}
				className="ui-button bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
			>
				{__('shows.error.button')}
			</button>
		</div>
	)
}

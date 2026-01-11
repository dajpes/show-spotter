'use client'

import { useTranslations } from 'next-intl'
import ShowCard from '@/app/packages/discovery/components/ShowCard'
import type { Show } from '@/app/packages/shared/api/schemas/shows'
import ShowCardSkeleton from '../ShowCard/CardSkeleton'

export function ShowsSection({
	shows,
	title,
}: {
	shows: Show[]
	title?: string
}) {
	return (
		<section className="mx-auto">
			{title ? <h1 className="text-2xl font-bold mb-6">{title}</h1> : null}
			<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{shows.map((show, index) => (
					<li key={show.id}>
						<ShowCard show={show} priority={index < 20} />
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
				className="cursor-pointer bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
			>
				{__('shows.error.button')}
			</button>
		</div>
	)
}

export function ShowsPageLoading({ title }: { title?: React.ReactNode }) {
	const __ = useTranslations()
	return (
		<section
			className="mx-auto flex flex-col gap-6"
			aria-busy="true"
			aria-label={__('shows.loading.ariaLabel')}
		>
			{title ? (
				title
			) : (
				<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse" />
			)}
			<ShowsCardsSkeletonList />
		</section>
	)
}

export function ShowsCardsSkeletonList() {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{Array.from({ length: 4 }).map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: We can safely ignore this
				<li key={i}>
					<ShowCardSkeleton />
				</li>
			))}
		</ul>
	)
}

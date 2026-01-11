'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo } from 'react'
import { useSearchShowsQuery } from '@/app/store/api'
import { ShowsError, ShowsPageLoading, ShowsSection } from '../ShowsDisplay'

export default function FetchSearchResults() {
	const __ = useTranslations()
	const searchParams = useSearchParams()
	const query = searchParams.get('q') ?? ''

	const {
		data: results,
		isLoading,
		error,
		refetch,
	} = useSearchShowsQuery(query, {
		skip: !query,
	})

	const normalizedResults = useMemo(
		() => results?.map(({ show }) => show) ?? [],
		[results],
	)

	useEffect(() => {
		if (query) {
			document.title = `${__('search.resultsFor', { query })} | ShowSpotter`
		}
	}, [query, __])

	if (!query) {
		return (
			<div className="flex flex-col items-center justify-center gap-4 mt-20">
				<p className="text-muted-foreground text-lg">
					{__('search.enterQuery')}
				</p>
			</div>
		)
	}
	if (isLoading) {
		return (
			<ShowsPageLoading
				title={
					<h1 className="text-2xl font-bold mb-6">
						{__('search.loadingResultsFor', { query })}
					</h1>
				}
			/>
		)
	}

	if (error) return <ShowsError onRetry={() => refetch()} />

	if (!normalizedResults || normalizedResults.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center gap-4 mt-20">
				<p className="text-muted-foreground text-lg">
					{__('search.noResults', { query })}
				</p>
			</div>
		)
	}

	return <ShowsSection shows={normalizedResults} />
}

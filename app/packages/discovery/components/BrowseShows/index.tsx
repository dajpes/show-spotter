'use client'

import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Show } from '@/app/packages/shared/api/schemas/shows'
import { useGetShowsQuery } from '@/app/store/api'

import {
	NoShowsFound,
	ShowsCardsSkeletonList,
	ShowsError,
	ShowsPageLoading,
	ShowsSection,
} from '../ShowsDisplay'

const INITIAL_PAGE = 0
const SHOWS_PER_PAGE = 200

export default function BrowseShows() {
	const __ = useTranslations()
	const [page, setPage] = useState(INITIAL_PAGE)

	const [allShows, setAllShows] = useState<Show[]>([])

	const [hasMore, setHasMore] = useState(true)

	const { data, isLoading, isFetching, isSuccess, error, refetch } =
		useGetShowsQuery(page)

	const observerRef = useRef<IntersectionObserver | null>(null)
	const loadMoreRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (isFetching) return
			if (observerRef.current) observerRef.current.disconnect()

			observerRef.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore && !isFetching) {
					setPage((prev) => prev + 1)
				}
			})

			if (node) observerRef.current.observe(node)
		},
		[isFetching, hasMore],
	)

	useEffect(() => {
		if (data) {
			if (data.length < SHOWS_PER_PAGE) {
				setHasMore(false)
			}
			setAllShows((prev) => {
				const existingIds = new Set(prev.map((s) => s.id))
				const newShows = data.filter((s) => !existingIds.has(s.id))
				return [...prev, ...newShows]
			})
		}
	}, [data])

	if (isLoading) return <ShowsPageLoading />

	if (error) return <ShowsError onRetry={() => refetch()} />

	if (isSuccess && data.length === 0) return <NoShowsFound />

	if (allShows.length > 1) {
		return (
			<div className="flex flex-col gap-6">
				<ShowsSection shows={allShows} title={__('shows.todaysShows')} />

				{(isLoading || isFetching) && <ShowsCardsSkeletonList />}

				{hasMore && !isFetching && (
					<div ref={loadMoreRef} className="h-10 mt-8" aria-hidden="true" />
				)}

				{!hasMore && allShows.length > 0 && (
					<p className="text-center text-muted-foreground mt-8">
						{__('shows.endOfList')}
					</p>
				)}
			</div>
		)
	}
}

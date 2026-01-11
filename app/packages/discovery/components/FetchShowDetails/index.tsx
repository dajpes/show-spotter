'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useGetShowByIdQuery } from '@/app/store/api'
import ShowDetails from '../ShowDetailsStates'
import ShowDetailsError from '../ShowDetailsStates/ShowDetailsError'
import ShowDetailsSkeleton from '../ShowDetailsStates/ShowDetailsSkeleton'
import ShowNotFound from '../ShowDetailsStates/ShowNotFound'

export default function FetchShowDetails() {
	const params = useParams<{ id: string }>()
	const { data: show, isLoading, error } = useGetShowByIdQuery(params.id)

	useEffect(() => {
		if (show?.name) {
			document.title = `${show.name} | ShowSpotter`
		}
	}, [show?.name])

	if (isLoading) return <ShowDetailsSkeleton />
	if (error) return <ShowDetailsError />
	if (!show) return <ShowNotFound />

	return <ShowDetails show={show} />
}

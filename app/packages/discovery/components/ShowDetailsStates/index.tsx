'use client'

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { ShowDetailsResponse } from '@/app/packages/shared/api/schemas/showDetails'
import FavoriteButton from '../FavoriteButton'
import Genres from '../Genres'
import Rating from '../Rating'
import ShowType from '../ShowType'

interface ShowDetailsViewProps {
	show: ShowDetailsResponse
}

export default function ShowDetails({ show }: ShowDetailsViewProps) {
	const __ = useTranslations()

	return (
		<article className="max-w-4xl mx-auto">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-primary hover:underline mb-6 focusable rounded-lg"
			>
				<ArrowLongLeftIcon className="w-5 h-5" />
				{__('showDetails.backToShows')}
			</Link>

			<div className="grid md:grid-cols-[300px_1fr] gap-8">
				<div className="relative aspect-2/3 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
					{show.image?.original ? (
						<Image
							src={show.image.original}
							alt={show.name}
							fill
							className="object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<span className="text-gray-400">{__('shows.show.noImage')}</span>
						</div>
					)}
				</div>

				<div className="flex flex-col space-y-3">
					<div className="flex items-center gap-3">
						<h1 className="text-3xl font-bold">{show.name}</h1>
						<FavoriteButton show={show} />
					</div>

					<div className="flex flex-wrap gap-2">
						<ShowType type={show.type} />
						<span className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-sm">
							{show.status}
						</span>
						{show.rating.average && <Rating rating={show.rating.average} />}
					</div>

					{show.genres.length > 0 && <Genres genres={show.genres} />}

					{show.summary && (
						<div
							className="mt-6 mb-10"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: API returns HTML in summary
							dangerouslySetInnerHTML={{ __html: show.summary }}
						/>
					)}
					<DetailedShowInfo show={show} />
				</div>
			</div>
		</article>
	)
}

const DetailedShowInfo = ({ show }: { show: ShowDetailsResponse }) => {
	const __ = useTranslations()
	const detailedList = [
		{
			key: 'network',
			label: __('showDetails.network'),
			value: show.network?.name,
		},
		{
			key: 'streaming',
			label: __('showDetails.streaming'),
			value: show.webChannel?.name,
		},
		{
			key: 'schedule',
			label: __('showDetails.schedule'),
			value:
				show.schedule.time &&
				`${show.schedule.days.join(', ')} @ ${show.schedule.time}`,
		},
		{
			key: 'premiered',
			label: __('showDetails.premiered'),
			value: show.premiered,
		},
		{
			key: 'runtime',
			label: __('showDetails.runtime.title'),
			value:
				show.runtime &&
				__('showDetails.runtime.duration', { duration: show.runtime }),
		},
		{
			key: 'officialSite',
			label: __('showDetails.officialSite'),
			value: show.officialSite && (
				<a
					href={show.officialSite}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-700 hover:underline focusable"
				>
					{__('showDetails.visitSite')}
				</a>
			),
		},
	]
	return (
		<dl className="grid grid-cols-2 gap-4 text-sm">
			{detailedList.map(({ key, label, value }) => (
				<DetailItem key={key} label={label} value={value} />
			))}
		</dl>
	)
}

interface DetailItemProps {
	label: string
	value: React.ReactNode
}

function DetailItem({ label, value }: DetailItemProps) {
	if (!value) return null
	return (
		<div>
			<dt className="text-muted-foreground">{label}</dt>
			<dd className="font-medium">{value}</dd>
		</div>
	)
}

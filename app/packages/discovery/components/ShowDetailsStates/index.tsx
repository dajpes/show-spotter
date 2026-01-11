'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { ShowDetailsResponse } from '@/app/packages/shared/api/schemas/showDetails'

interface ShowDetailsViewProps {
	show: ShowDetailsResponse
}

export default function ShowDetails({ show }: ShowDetailsViewProps) {
	const __ = useTranslations()

	return (
		<article className="max-w-4xl mx-auto">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
			>
				← {__('showDetails.backToShows')}
			</Link>

			<div className="grid md:grid-cols-[300px_1fr] gap-8">
				<div className="aspect-2/3 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
					{show.image?.original ? (
						<img
							src={show.image.original}
							alt={show.name}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<span className="text-gray-400">{__('shows.show.noImage')}</span>
						</div>
					)}
				</div>

				<div>
					<h1 className="text-3xl font-bold mb-2">{show.name}</h1>

					<div className="flex flex-wrap gap-2 mb-4">
						<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
							{show.type}
						</span>
						<span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
							{show.status}
						</span>
						{show.rating.average && (
							<span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
								★ {show.rating.average}
							</span>
						)}
					</div>

					{show.genres.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-4">
							{show.genres.map((genre) => (
								<span
									key={genre}
									className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
								>
									{genre}
								</span>
							))}
						</div>
					)}

					{show.summary && (
						<div
							className="prose dark:prose-invert max-w-none mb-6"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: API returns HTML in summary
							dangerouslySetInnerHTML={{ __html: show.summary }}
						/>
					)}

					<dl className="grid grid-cols-2 gap-4 text-sm">
						{show.network && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.network')}
								</dt>
								<dd className="font-medium">{show.network.name}</dd>
							</div>
						)}
						{show.webChannel && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.streaming')}
								</dt>
								<dd className="font-medium">{show.webChannel.name}</dd>
							</div>
						)}
						{show.schedule.time && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.schedule')}
								</dt>
								<dd className="font-medium">
									{show.schedule.days.join(', ')} @ {show.schedule.time}
								</dd>
							</div>
						)}
						{show.premiered && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.premiered')}
								</dt>
								<dd className="font-medium">{show.premiered}</dd>
							</div>
						)}
						{show.runtime && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.runtime')}
								</dt>
								<dd className="font-medium">{show.runtime} min</dd>
							</div>
						)}
						{show.officialSite && (
							<div>
								<dt className="text-muted-foreground">
									{__('showDetails.officialSite')}
								</dt>
								<dd>
									<a
										href={show.officialSite}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										{__('showDetails.visitSite')}
									</a>
								</dd>
							</div>
						)}
					</dl>
				</div>
			</div>
		</article>
	)
}

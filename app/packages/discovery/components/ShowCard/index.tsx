import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { Show } from '@/app/packages/shared/api/schemas/shows'
import Genres from '../Genres'
import Rating from '../Rating'
import ShowTypeBadge from '../ShowType'

interface ShowCardProps {
	show: Show
	priority?: boolean
}

export default function ShowCard({ show, priority = false }: ShowCardProps) {
	const __ = useTranslations()

	return (
		<div className="group rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 h-100">
			<Link
				href={`/show/${show.id}`}
				className="flex flex-col h-full rounded-lg focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 overflow-hidden"
			>
				<div className="aspect-square relative overflow-hidden">
					{show.image?.medium ? (
						<Image
							src={show.image.medium}
							alt=""
							fill
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
							preload={priority}
							loading={priority ? 'eager' : 'lazy'}
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					) : (
						<div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
							<span className="text-gray-400 text-sm">
								{__('shows.show.noImage')}
							</span>
						</div>
					)}
					<div className="absolute top-2 right-0 flex w-full justify-between px-2">
						<ShowTypeBadge type={show.type} />
						{show.rating?.average && (
							<div className="ml-auto">
								<Rating rating={show.rating.average} />
							</div>
						)}
					</div>
				</div>
				<div className="p-4 flex flex-col gap-y-2 flex-1">
					<h3 className="font-semibold text-foreground truncate ">
						{show.name}
					</h3>
					<Genres genres={show.genres} />
					{show.summary && (
						<div className="mask-r-from-30% mt-auto">
							<div
								className="line-clamp-1 text-sm"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: API returns HTML in summary
								dangerouslySetInnerHTML={{ __html: show.summary }}
							/>
						</div>
					)}
				</div>
			</Link>
		</div>
	)
}

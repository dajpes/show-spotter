import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { ScheduleItem } from '@/app/packages/shared/api/schemas/shows'

interface ShowCardProps {
	item: ScheduleItem
}

export default function ShowCard({ item }: ShowCardProps) {
	const show = item._embedded.show
	const __ = useTranslations()

	return (
		<div className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
			<Link href={`/show/${show.id}`} className="block">
				<div className="aspect-square relative overflow-hidden">
					{show.image?.original ? (
						<img
							src={show.image.original}
							alt=""
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					) : (
						<div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
							<span className="text-gray-400 text-sm">
								{__('shows.show.noImage')}
							</span>
						</div>
					)}
				</div>
				<div className="p-4">
					<h3 className="font-semibold text-foreground truncate ">
						{show.name}
					</h3>
					<ShowTypeBadge type={show.type} />
				</div>
			</Link>
		</div>
	)
}

const ShowTypeBadge = ({ type }: { type: string }) => {
	const getTypeColors =
		{
			News: 'bg-primary/20 text-primary',
			Scripted: 'bg-secondary/20 text-secondary ',
			Animation: 'bg-tertiary/20 text-tertiary',
			'Game Show': 'bg-tertiary/20 text-tertiary',
		}[type] ?? null

	return (
		<span
			className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${getTypeColors}`}
		>
			{type}
		</span>
	)
}

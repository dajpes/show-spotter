import { useTranslations } from 'next-intl'
import FetchCountryShows from '@/app/packages/discovery/components/FetchCountryShows'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'
import ShowCard from '@/app/packages/discovery/components/ShowCard'
import { ScheduleResponse } from '../packages/shared/api/schemas/shows'

export default function Home() {
	return (
		<DiscoveryLayout>
			<FetchCountryShows>
				{(shows) => {
					if (shows.length === 0) return <NoShowsFound />
					return <ShowsSection shows={shows} />
				}}
			</FetchCountryShows>
		</DiscoveryLayout>
	)
}

const NoShowsFound = () => {
	const __ = useTranslations()
	return <p>{__('shows.notFound')}</p>
}

const ShowsSection = ({ shows }: { shows: ScheduleResponse }) => {
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

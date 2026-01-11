import FetchCountryShows from '@/app/packages/discovery/components/FetchCountryShows'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'
import {
	NoShowsFound,
	ShowsSection,
} from '@/app/packages/discovery/components/ShowsDisplay'

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

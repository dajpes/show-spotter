import BrowseShows from '@/app/packages/discovery/components/BrowseShows'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'

export default function Home() {
	return (
		<DiscoveryLayout>
			<BrowseShows />
		</DiscoveryLayout>
	)
}

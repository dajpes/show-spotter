import FetchSearchResults from '@/app/packages/discovery/components/FetchSearchResults'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'

export default function SearchPage() {
	return (
		<DiscoveryLayout>
			<FetchSearchResults />
		</DiscoveryLayout>
	)
}

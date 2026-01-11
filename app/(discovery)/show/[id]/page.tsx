import FetchShowDetails from '@/app/packages/discovery/components/FetchShowDetails'
import DiscoveryLayout from '@/app/packages/discovery/components/Layout/DiscoveryLayout'

export default function ShowPage() {
	return (
		<DiscoveryLayout>
			<FetchShowDetails />
		</DiscoveryLayout>
	)
}

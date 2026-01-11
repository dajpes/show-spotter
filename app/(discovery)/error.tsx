'use client'

import DiscoveryLayoutShell from '../packages/discovery/components/Layout/DiscoveryLayoutShell'
import { ShowsError } from '../packages/discovery/components/ShowsDisplay'

export default function Error({ reset }: { reset: () => void }) {
	return (
		<DiscoveryLayoutShell>
			<ShowsError onRetry={reset} />
		</DiscoveryLayoutShell>
	)
}

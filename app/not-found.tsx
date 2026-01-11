import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import DiscoveryLayoutShell from '@/app/packages/discovery/components/Layout/DiscoveryLayoutShell'
import PageNotFound from '@/app/packages/shared/components/PageNotFound'

export async function generateMetadata(): Promise<Metadata> {
	const __ = await getTranslations()
	return {
		title: `${__('error.pageNotFound')} | ShowSpotter`,
	}
}

export default function NotFound() {
	return (
		<DiscoveryLayoutShell>
			<PageNotFound />
		</DiscoveryLayoutShell>
	)
}

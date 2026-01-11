import { cookies } from 'next/headers'
import type { languages } from '../../../shared/components/LanguageSelector'
import DiscoveryLayoutShell from './DiscoveryLayoutShell'

export default async function DiscoveryLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const cookieStore = await cookies()
	const language = (cookieStore.get('language')?.value as languages) ?? 'en'

	return (
		<DiscoveryLayoutShell currentLanguage={language}>
			{children}
		</DiscoveryLayoutShell>
	)
}

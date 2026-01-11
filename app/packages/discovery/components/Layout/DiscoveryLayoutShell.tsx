'use client'

import Link from 'next/link'
import ThemeToggle from '@/app/packages/shared/components/ThemeToggle'
import LanguageSelector, {
	type languages,
} from '../../../shared/components/LanguageSelector'
import SearchEvent from '../SearchEvent'

export default function DiscoveryLayoutShell({
	children,
	currentLanguage,
}: {
	children: React.ReactNode
	currentLanguage?: languages
}) {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr]">
			<header className="border-b border-gray-200">
				<div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[1fr_2fr_1fr] gap-4 p-4 align-center items-center">
					<div>
						<Link href="/">ShowSpotter</Link>
					</div>
					<div className="place-self-center w-full">
						<SearchEvent />
					</div>
					<div className="place-self-end self-center flex gap-2">
						<ThemeToggle />
						<LanguageSelector currentLanguage={currentLanguage} />
					</div>
				</div>
			</header>
			<div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1">
				<main className="px-4 py-8">{children}</main>
			</div>
		</div>
	)
}

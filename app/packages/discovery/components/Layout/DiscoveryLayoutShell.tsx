'use client'

import { TvIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ThemeToggle from '@/app/packages/shared/components/ThemeToggle'
import LanguageSelector, {
	type languages,
} from '../../../shared/components/LanguageSelector'
import FavoritesLink from '../FavoritesLink'
import SearchEvent from '../SearchEvent'

export default function DiscoveryLayoutShell({
	children,
	currentLanguage,
}: {
	children: React.ReactNode
	currentLanguage?: languages
}) {
	const __ = useTranslations()
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr]">
			<header className="border-b border-gray-200">
				<div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[1fr_2fr_1fr] gap-4 p-4 align-center items-center">
					<div className="md:flex flex-col justify-between place-content-center place-items-center hidden">
						<Link href="/" className="focusable rounded-lg">
							<TvIcon className="w-8 h-8 fill-blue-500" />
							<span className="sr-only">ShowSpotter</span>
						</Link>
						<span className="text-xs text-gray-500">{__('base.builtBy')}</span>
					</div>
					<div className="place-self-center w-full col-span-2 md:col-span-1">
						<SearchEvent />
					</div>
					<div className="place-self-end self-center flex gap-2 items-center">
						<FavoritesLink />
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

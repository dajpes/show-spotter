'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ShowNotFound() {
	const __ = useTranslations()

	return (
		<div className="flex flex-col items-center justify-center gap-4 mt-20">
			<h2 className="text-xl font-semibold text-muted-foreground">
				{__('showDetails.notFound')}
			</h2>
			<p className="text-muted-foreground">{__('showDetails.notFoundDesc')}</p>
			<Link
				href="/"
				className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
			>
				{__('showDetails.backToShows')}
			</Link>
		</div>
	)
}

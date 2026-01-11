'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function PageNotFound() {
	const __ = useTranslations()

	return (
		<div className="flex flex-col items-center justify-center gap-6 mt-20">
			<h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600">
				404
			</h1>
			<h2 className="text-2xl font-semibold">{__('error.pageNotFound')}</h2>
			<p className="text-muted-foreground">{__('error.pageNotFoundHint')}</p>
			<Link
				href="/"
				className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focusable"
			>
				{__('error.backToHome')}
			</Link>
		</div>
	)
}

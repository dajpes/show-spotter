'use client'

import { Button } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import DiscoveryLayoutShell from '../packages/discovery/components/Layout/DiscoveryLayoutShell'

export default function Error({ reset }: { reset: () => void }) {
	const __ = useTranslations()

	return (
		<DiscoveryLayoutShell>
			<div className="flex flex-col items-center justify-center gap-4 mt-20">
				<h2 className="text-xl font-semibold text-red-600">
					{__('shows.error.title')}
				</h2>
				<Button
					onClick={reset}
					className="ui-button bg-blue-600 p-2 rounded-lg text-white focus:ring-blue-500 focus:ring-offset-2"
				>
					{__('shows.error.button')}
				</Button>
			</div>
		</DiscoveryLayoutShell>
	)
}

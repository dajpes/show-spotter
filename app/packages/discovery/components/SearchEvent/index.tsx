'use client'

import { useTranslations } from 'next-intl'
import { type FormEvent, useState } from 'react'

interface Props {
	onSubmit?: (query: string) => void
}

export default function SearchEvent({ onSubmit }: Props) {
	const __ = useTranslations()
	const [searchQuery, setSearchQuery] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (onSubmit) {
			onSubmit(searchQuery)
		}
		console.log('Search query:', searchQuery)
	}

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<label htmlFor="search-input" className="sr-only">
				{__('search.label')}
			</label>
			<div className="relative w-full">
				<input
					id="search-input"
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder={__('search.placeholder')}
					className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-24 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-blue-600 px-4 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					{__('search.button')}
				</button>
			</div>
		</form>
	)
}

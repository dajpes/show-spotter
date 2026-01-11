'use client'

import { Button } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { type FormEvent, useState } from 'react'

export default function SearchEvent() {
	const __ = useTranslations()
	const router = useRouter()
	const searchParams = useSearchParams()
	const query = searchParams.get('q') ?? ''

	const [searchQuery, setSearchQuery] = useState(query)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
		}
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
					className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-24 text-gray-900 placeholder:text-gray-500 focusable dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-blue-400"
				/>
				<div className="absolute right-10 top-1/2 -translate-y-1/2 border-l h-3/4 pt-2 w-2 border-gray-300" />
				<Button
					type="submit"
					className="before:bg-gray-500 cursor-pointer absolute right-2 top-1/2 rounded-lg -translate-y-1/2  p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					<MagnifyingGlassIcon className="w-5 h-5 fill-gray-500" />
					<span className="sr-only">{__('search.button')}</span>
				</Button>
			</div>
		</form>
	)
}

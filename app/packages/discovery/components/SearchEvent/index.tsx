'use client'

import { type FormEvent, useState } from 'react'

export default function SearchEvent() {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Search query:', searchQuery)
	}

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<label htmlFor="search-input" className="sr-only">
				Search for TV shows
			</label>
			<div className="relative w-full">
				<input
					id="search-input"
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Movies, TV Shows, Concerts, Events..."
					className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-24 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-blue-600 px-4 py-1 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Search
				</button>
			</div>
		</form>
	)
}

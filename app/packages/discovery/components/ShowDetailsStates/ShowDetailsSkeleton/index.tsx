'use client'

export default function ShowDetailsSkeleton() {
	return (
		<article
			className="max-w-4xl mx-auto animate-pulse"
			aria-busy="true"
			aria-label="Loading show details"
		>
			<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-6" />

			<div className="grid md:grid-cols-[300px_1fr] gap-8">
				<div className="aspect-2/3 rounded-xl bg-gray-200 dark:bg-gray-700" />

				<div>
					<div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
					<div className="flex gap-2 mb-4">
						<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-20" />
						<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-16" />
					</div>
					<div className="space-y-2 mb-6">
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded" />
						<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded" />
					</div>
				</div>
			</div>
		</article>
	)
}

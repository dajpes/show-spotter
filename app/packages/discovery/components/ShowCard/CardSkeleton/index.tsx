export default function ShowCardSkeleton() {
	return (
		<div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md animate-pulse">
			<div className="block">
				<div className="aspect-square bg-gray-200 dark:bg-gray-700" />
				<div className="p-4">
					<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
					<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 mt-2" />
				</div>
			</div>
		</div>
	)
}

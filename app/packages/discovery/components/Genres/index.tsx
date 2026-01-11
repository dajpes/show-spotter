export default function Genres({ genres }: { genres: string[] }) {
	return (
		<div className="flex flex-wrap gap-2">
			{genres.map((genre) => (
				<span
					key={genre}
					className="px-2 py-1 bg-gray-300 text-gray-700 rounded text-xs"
				>
					{genre}
				</span>
			))}
		</div>
	)
}

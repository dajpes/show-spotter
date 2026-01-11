export default function ShowTypeBadge({ type }: { type: string }) {
	const getTypeColors =
		{
			News: 'bg-sky-300 text-sky-800',
			Scripted: 'bg-indigo-300 text-indigo-800',
			Animation: 'bg-emerald-300 text-emerald-800',
			'Game Show': 'bg-pink-300 text-pink-800',
			'Talk Show': 'bg-orange-300 text-orange-800',
			Reality: 'bg-zinc-300 text-zinc-800',
			Sports: 'bg-teal-300 text-teal-800',
			Documentary: 'bg-amber-300 text-amber-800',
			Variety: 'bg-green-300 text-green-800',
		}[type] ?? null

	return (
		<span
			className={`inline-bloc px-2 py-1 text-xs font-medium rounded-full ${getTypeColors}`}
		>
			{type}
		</span>
	)
}

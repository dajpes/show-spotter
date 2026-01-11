import { config } from '@/app/config'
import {
	ScheduleResponse,
	ScheduleResponseSchema,
} from '@/app/packages/shared/api/schemas/shows'

async function getCountryShows() {
	const url = `${config.apiBaseUrl}/schedule/web?country=${config.country}`

	const res = await fetch(url)

	if (!res.ok) {
		throw new Error(`Failed to fetch shows: ${res.status} ${res.statusText}`)
	}

	const data = await res.json()
	return ScheduleResponseSchema.parse(data)
}

export default async function FetchCountryShows({
	children,
}: {
	children: (shows: ScheduleResponse) => React.ReactNode
}) {
	const shows = await getCountryShows()

	return <>{children(shows)}</>
}

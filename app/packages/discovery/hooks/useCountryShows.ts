import { api } from '@/app/store/api'

export default function useCountryShows() {
	const { data, isLoading, error, isSuccess } = api.endpoints.shows.useQuery()

	return {
		data,
		isLoading,
		error,
		isSuccess,
	}
}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScheduleResponse } from '@/app/packages/shared/api/schemas/shows'
import CardSkeleton from '../ShowCard/CardSkeleton'
import { NoShowsFound, ShowsError, ShowsSection } from '../ShowsDisplay'

const mockShows = [
	{
		id: 1,
		name: 'Episode 1',
		season: 1,
		number: 1,
		airdate: '2026-01-11',
		airstamp: '2026-01-11T00:00:00.000Z',
		runtime: 60,
		_embedded: {
			show: {
				id: 1,
				name: 'Breaking Bad',
				type: 'Scripted',
				genres: ['Drama', 'Crime'],
				status: 'Ended',
				summary: 'A chemistry teacher diagnosed with cancer...',
				image: {
					medium:
						'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
					original:
						'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg',
				},
			},
		},
	},
	{
		id: 2,
		name: 'Episode 5',
		season: 2,
		number: 5,
		airdate: '2026-01-11',
		airstamp: '2026-01-11T00:00:00.000Z',
		runtime: 45,
		_embedded: {
			show: {
				id: 2,
				name: 'The Office',
				type: 'Scripted',
				genres: ['Comedy'],
				status: 'Ended',
				summary: 'A mockumentary sitcom about office life.',
				image: {
					medium:
						'https://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg',
					original:
						'https://static.tvmaze.com/uploads/images/original_untouched/85/213184.jpg',
				},
			},
		},
	},
	{
		id: 3,
		name: 'Morning News',
		season: 2026,
		number: 11,
		airdate: '2026-01-11',
		airstamp: '2026-01-11T07:00:00.000Z',
		runtime: 30,
		_embedded: {
			show: {
				id: 3,
				name: 'ABC News Live',
				type: 'News',
				genres: [],
				status: 'Running',
				summary: 'Live news coverage.',
				image: null,
			},
		},
	},
] satisfies ScheduleResponse

// Shows Section Stories
const showsSectionMeta = {
	title: 'Discovery/ShowsDisplay/ShowsSection',
	component: ShowsSection,
} satisfies Meta<typeof ShowsSection>

export default showsSectionMeta
type ShowsSectionStory = StoryObj<typeof showsSectionMeta>

export const WithShows: ShowsSectionStory = {
	args: {
		shows: mockShows,
	},
}

export const SingleShow: ShowsSectionStory = {
	args: {
		shows: [mockShows[0]],
	},
}

export const Loading = {
	render: () => (
		<section className="mx-auto" aria-busy="true">
			<div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6 animate-pulse" />
			<ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{Array.from({ length: 4 }).map((_, i) => (
					<CardSkeleton key={i} />
				))}
			</ul>
		</section>
	),
}

export const Empty = {
	render: () => <NoShowsFound />,
}
export const Error = {
	render: () => <ShowsError onRetry={() => {}} />,
}

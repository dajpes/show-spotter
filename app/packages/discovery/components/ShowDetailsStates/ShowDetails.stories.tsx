import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowDetails from '.'

const args = {
	show: {
		id: 1,
		name: 'Show Name',
		url: 'https://example.com',
		type: 'Type',
		language: 'en',
		ended: 'none',
		status: 'Running',
		averageRuntime: 60,
		webChannel: {
			id: 1,
			name: 'Web Channel Name',
			officialSite: 'https://example.com',
			country: {
				name: 'Country Name',
				code: 'US',
				timezone: 'America/New_York',
			},
		},
		genres: ['Genre 1', 'Genre 2'],
		image: {
			medium:
				'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
			original:
				'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg',
		},
		rating: {
			average: 8.5,
		},
		premiered: '2022-01-01',
		runtime: 60,
		officialSite: 'https://example.com',
		summary: 'Show summary',
		network: {
			id: 1,
			name: 'Network Name',
			officialSite: 'https://example.com',
			country: {
				name: 'Country Name',
				code: 'US',
				timezone: 'America/New_York',
			},
		},
		schedule: {
			days: ['Monday', 'Tuesday'],
			time: '20:00',
		},
	},
} satisfies React.ComponentProps<typeof ShowDetails>

const meta = {
	title: 'Discovery/ShowDetailsStates/ShowDetails',
	args,
	component: ShowDetails,
} satisfies Meta<typeof ShowDetails>

export default meta
type Story = StoryObj<typeof meta>

export const WithDetails: Story = {}

export const NoImage: Story = {
	args: {
		show: {
			...args.show,
			image: null,
		},
	},
}

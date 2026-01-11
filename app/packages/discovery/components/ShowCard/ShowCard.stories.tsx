import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowCard from '.'

const show = {
	item: {
		name: 'Show 1',
		id: 1,
		season: 1,
		number: 1,
		airdate: '2022-01-01',
		airstamp: '2022-01-01T00:00:00.000Z',
		runtime: 60,
		_embedded: {
			show: {
				summary: 'Summary',
				id: 1,
				genres: ['comedy'],
				status: 'Continuing',
				name: 'Show 1',
				type: 'Scripted',
				image: {
					medium:
						'https://static.tvmaze.com/uploads/images/medium_portrait/606/1516092.jpg',
					original:
						'https://static.tvmaze.com/uploads/images/medium_portrait/606/1516092.jpg',
				},
			},
		},
	},
} satisfies React.ComponentProps<typeof ShowCard>

const meta = {
	title: 'Discovery/ShowCard/ShowCard',
	component: ShowCard,
	args: show,
	render: (args) => (
		<div className="w-64 p-4">
			<ShowCard {...args} />
		</div>
	),
} satisfies Meta<typeof ShowCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const NoImage: Story = {
	args: {
		item: {
			...show.item,
			_embedded: {
				show: {
					...show.item._embedded.show,
					image: null,
				},
			},
		},
	},
}

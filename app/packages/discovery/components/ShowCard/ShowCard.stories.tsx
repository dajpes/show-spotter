import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowCard from '.'

const mockShow = {
	show: {
		id: 1,
		name: 'Breaking Bad',
		type: 'Scripted',
		rating: {
			average: 7.3,
		},
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
} satisfies React.ComponentProps<typeof ShowCard>

const meta = {
	title: 'Discovery/ShowCard/ShowCard',
	component: ShowCard,
	args: mockShow,
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
		show: {
			...mockShow.show,
			image: null,
		},
	},
}

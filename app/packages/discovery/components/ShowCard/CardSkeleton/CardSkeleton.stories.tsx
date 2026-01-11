import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowCardSkeleton from '.'

const meta = {
	title: 'Discovery/ShowCard/CardSkeleton',
	component: ShowCardSkeleton,
	decorators: [
		(Story) => (
			<div className="w-64 p-4">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ShowCardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

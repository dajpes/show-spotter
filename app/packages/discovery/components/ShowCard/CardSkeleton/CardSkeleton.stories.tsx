import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CardSkeleton from '.'

const meta = {
	title: 'Discovery/ShowCard/CardSkeleton',
	component: CardSkeleton,
	decorators: [
		(Story) => (
			<div className="w-64 p-4">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof CardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

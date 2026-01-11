import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Rating from '.'

const meta = {
	title: 'Discovery/Rating',
	component: Rating,
	args: { rating: 5 },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

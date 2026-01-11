import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowDetailsSkeleton from '.'

const meta = {
	title: 'Discovery/ShowDetailsStates/Skeleton',
	component: ShowDetailsSkeleton,
} satisfies Meta<typeof ShowDetailsSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

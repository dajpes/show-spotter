import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowNotFound from '.'

const meta = {
	title: 'Discovery/ShowDetailsStates/NotFound',
	component: ShowNotFound,
} satisfies Meta<typeof ShowNotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

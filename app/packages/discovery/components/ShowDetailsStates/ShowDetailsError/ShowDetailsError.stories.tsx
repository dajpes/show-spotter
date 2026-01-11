import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowDetailsError from '.'

const meta = {
	title: 'Discovery/ShowDetailsStates/Error',
	component: ShowDetailsError,
} satisfies Meta<typeof ShowDetailsError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

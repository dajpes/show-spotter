import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ShowType from '.'

const meta = {
	title: 'Discovery/ShowType',
	component: ShowType,
	args: { type: 'Scripted' },
} satisfies Meta<typeof ShowType>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

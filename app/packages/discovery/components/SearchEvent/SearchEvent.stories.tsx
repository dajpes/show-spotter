import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import SearchEvent from './index'

const meta = {
	title: 'Discovery/SearchEvent',
	component: SearchEvent,
	tags: ['autodocs'],
} satisfies Meta<typeof SearchEvent>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Genres from '.'

const meta = {
	title: 'Discovery/Genres',
	component: Genres,
	args: { genres: ['Thriller', 'Drama'] },
} satisfies Meta<typeof Genres>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

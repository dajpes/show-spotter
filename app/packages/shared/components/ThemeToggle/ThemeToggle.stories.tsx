import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeProvider } from '../ThemeProvider'
import ThemeToggle from '.'

const meta = {
	title: 'Shared/ThemeToggle',
	component: ThemeToggle,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

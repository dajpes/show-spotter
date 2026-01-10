import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import LocaleSwitcher from '.'

const meta = {
	title: 'Shared/LocaleSwitcher',
	component: LocaleSwitcher,
} satisfies Meta<typeof LocaleSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

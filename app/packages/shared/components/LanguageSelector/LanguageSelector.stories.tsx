import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import LanguageSelector from '.'

const meta = {
	title: 'Shared/LanguageSelector',
	component: LanguageSelector,
} satisfies Meta<typeof LanguageSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

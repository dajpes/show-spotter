'use client'

import { Button } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { useTheme } from '../ThemeProvider'

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const __ = useTranslations()

	const NextTheme = () => {
		return theme === 'dark' ? __('theme.light') : __('theme.dark')
	}

	return (
		<Button
			type="button"
			onClick={toggleTheme}
			className="rounded-lg p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 ui-button"
			aria-label={__('theme.toggle', { themeName: NextTheme() })}
		>
			{theme === 'light' ? (
				<MoonIcon className="h-5 w-5" />
			) : (
				<SunIcon className="h-5 w-5" />
			)}
		</Button>
	)
}

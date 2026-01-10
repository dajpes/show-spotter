'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const __ = useTranslations()

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-primary focus:outline-none"
			aria-label={__('theme.toggle')}
		>
			{theme === 'light' ? (
				<MoonIcon className="h-5 w-5" />
			) : (
				<SunIcon className="h-5 w-5" />
			)}
		</button>
	)
}

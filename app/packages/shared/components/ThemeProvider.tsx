'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'theme'

const NEXT_THEME: Record<Theme, Theme> = {
	dark: 'light',
	light: 'dark',
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>('light')

	useEffect(() => {
		const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme

		if (Object.values(NEXT_THEME).includes(storedTheme)) {
			setThemeState(storedTheme)
			document.documentElement.setAttribute('data-theme', storedTheme)
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setThemeState('dark')
			document.documentElement.setAttribute('data-theme', 'dark')
		}
	}, [])

	const toggleTheme = () => {
		setThemeState(NEXT_THEME[theme])
		localStorage.setItem(THEME_STORAGE_KEY, NEXT_THEME[theme])
		document.documentElement.setAttribute('data-theme', NEXT_THEME[theme])
	}

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

import type { Metadata } from 'next'
import './globals.css'
import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { languages } from './packages/shared/components/LanguageSelector'
import { ReduxProvider } from './packages/shared/components/ReduxProvider'
import { ThemeProvider } from './packages/shared/components/ThemeProvider'

export const metadata: Metadata = {
	title: 'ShowSpotter - TV Show Search & Favorites App',
	description: 'Show Spotter Mini App - Damian Perez - Technical Challenge',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const language = (cookieStore.get('language')?.value as languages) ?? 'en'
	const messages = await getMessages()

	return (
		<html lang={language} suppressHydrationWarning>
			<body className="antialiased">
				<ReduxProvider>
					<ThemeProvider>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}

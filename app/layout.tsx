import type { Metadata } from 'next'
import './globals.css'
import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { LocaleLanguages } from './packages/discovery/components/LocaleSwitcher'

export const metadata: Metadata = {
	title: 'Show Spotter Mini App',
	description: 'Show Spotter Mini App - Damian Perez - Technical Challenge',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const locale = (cookieStore.get('locale')?.value as LocaleLanguages) ?? 'en'
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className="antialiased">
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

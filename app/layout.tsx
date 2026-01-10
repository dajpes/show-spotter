import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Show Spotter Mini App',
	description: 'Show Spotter Mini App - Damian Perez - Technical Challenge',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	)
}

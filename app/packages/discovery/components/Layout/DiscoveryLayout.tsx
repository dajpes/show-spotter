import Link from 'next/link'
import SearchEvent from '../SearchEvent'

export default function DiscoveryLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr]">
			<header className="border-b border-gray-200 bg-gray-50">
				<div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[1fr_2fr_1fr] gap-4 p-4 align-center items-center">
					<div>
						<Link href="/">ShowSpotter</Link>
					</div>
					<div className="place-self-center w-full">
						<SearchEvent />
					</div>
					<div className="place-self-end self-center">user</div>
				</div>
			</header>
			<div className="mx-auto grid w-full max-w-screen-2xl grid-cols-[1fr_2fr_1fr]">
				<main className="col-start-2 px-4 py-8">{children}</main>
			</div>
		</div>
	)
}

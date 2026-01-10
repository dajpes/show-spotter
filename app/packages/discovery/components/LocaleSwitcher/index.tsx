'use client'

import Cookies from 'js-cookie'

export type LocaleLanguages = 'en' | 'es'

interface LocaleSwitcherProps {
	initialLocale?: LocaleLanguages
}

export default function LocaleSwitcher({ initialLocale }: LocaleSwitcherProps) {
	const currentLocale = initialLocale

	const switchLocale = (locale: LocaleLanguages) => {
		Cookies.set('locale', locale, { expires: 365, path: '/' })
		window.location.reload()
	}

	return (
		<div className="flex gap-2">
			<button
				type="button"
				onClick={() => switchLocale('en')}
				className={`px-4 py-2 rounded cursor-pointer ${
					currentLocale === 'en'
						? 'bg-blue-600 text-white'
						: 'bg-gray-200 text-gray-800'
				}`}
			>
				en
			</button>
			<button
				type="button"
				onClick={() => switchLocale('es')}
				className={`px-4 py-2 rounded cursor-pointer ${
					currentLocale === 'es'
						? 'bg-blue-600 text-white'
						: 'bg-gray-200 text-gray-800'
				}`}
			>
				es
			</button>
		</div>
	)
}

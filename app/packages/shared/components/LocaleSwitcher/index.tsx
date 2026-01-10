'use client'

import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'

export type LocaleLanguages = 'en' | 'es'

interface LocaleSwitcherProps {
	initialLocale?: LocaleLanguages
}

export default function LocaleSwitcher({ initialLocale }: LocaleSwitcherProps) {
	const __ = useTranslations()

	const switchLocale = (locale: LocaleLanguages) => {
		Cookies.set('locale', locale, { expires: 365, path: '/' })
		window.location.reload()
	}

	return (
		<Menu>
			<MenuButton className="ui-button rounded-lg p-2">
				{__('languages.select')}
			</MenuButton>
			<MenuItems
				anchor="bottom"
				className="rounded-lg ui-button bg-white dark:bg-gray-800"
			>
				<MenuItem>
					<Button
						className="ui-button data-focus:bg-blue-100 dark:data-focus:bg-blue-800 w-full p-2 flex gap-2 place-items-center"
						onClick={() => switchLocale('en')}
					>
						{__('languages.en')}
						{initialLocale === 'en' && (
							<>
								<span className="sr-only">{__('languages.selected')}</span>
								<CheckIcon className="text-blue-600 w-5 h-5" />
							</>
						)}
					</Button>
				</MenuItem>
				<MenuItem>
					<Button
						className="ui-button data-focus:bg-blue-100 dark:data-focus:bg-blue-800 w-full p-2 flex gap-2 place-items-center"
						onClick={() => switchLocale('es')}
					>
						{__('languages.es')}
						{initialLocale === 'es' && (
							<>
								<span className="sr-only">{__('languages.selected')}</span>
								<CheckIcon className="text-blue-600 w-5 h-5" />
							</>
						)}
					</Button>
				</MenuItem>
			</MenuItems>
		</Menu>
	)
}

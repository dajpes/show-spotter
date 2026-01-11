'use client'

import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'

export type languages = 'en' | 'es'

export interface LanguageSelectorProps {
	currentLanguage?: languages
}

export default function LanguageSelector({
	currentLanguage,
}: LanguageSelectorProps) {
	const __ = useTranslations()

	const changeLanguage = (language: languages) => {
		Cookies.set('language', language, { expires: 365, path: '/' })
		window.location.reload()
	}

	return (
		<Menu>
			<MenuButton className="cursor-pointer rounded-lg p-2 focusable">
				{__('languages.select')}
			</MenuButton>
			<MenuItems
				anchor="bottom"
				className="rounded-lg cursor-pointer bg-stone-100 dark:bg-gray-800 border dark:border-0"
			>
				{['en', 'es'].map((language) => {
					return (
						<MenuItem key={language}>
							<Button
								className="cursor-pointer data-focus:bg-blue-100 dark:data-focus:bg-blue-800 w-full p-2 flex gap-2 place-items-center"
								onClick={() => changeLanguage(language as languages)}
							>
								{__(`languages.${language}`)}
								{currentLanguage === language && (
									<>
										<span className="sr-only">{__('languages.selected')}</span>
										<CheckIcon className="fill-blue-600 w-5 h-5" />
									</>
								)}
							</Button>
						</MenuItem>
					)
				})}
			</MenuItems>
		</Menu>
	)
}

import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'
import type { languages } from '../packages/shared/components/LanguageSelector'

const MESSAGE_FOLDERS = ['base', 'discovery'] as const

export default getRequestConfig(async () => {
	// Read language from cookie (accessible on server-side)
	const cookieStore = await cookies()
	const language = (cookieStore.get('language')?.value as languages) ?? 'en'

	// Dynamically load all message files in parallel
	const messagesObj = await Promise.all(
		MESSAGE_FOLDERS.map((folder) =>
			import(`./messages/${folder}/${language}.json`).then((m) => m.default),
		),
	)

	const messages = Object.assign({}, ...messagesObj)

	return {
		locale: language,
		messages,
	}
})

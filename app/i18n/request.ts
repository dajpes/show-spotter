import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

const MESSAGE_FOLDERS = ['base', 'discovery'] as const

export default getRequestConfig(async () => {
	// Read locale from cookie (accessible on server-side)
	const cookieStore = await cookies()
	const locale = (cookieStore.get('locale')?.value as 'en' | 'es') ?? 'en'

	// Dynamically load all message files in parallel
	const messagesObj = await Promise.all(
		MESSAGE_FOLDERS.map((folder) =>
			import(`./messages/${folder}/${locale}.json`).then((m) => m.default),
		),
	)

	const messages = Object.assign({}, ...messagesObj)

	return {
		locale,
		messages,
	}
})

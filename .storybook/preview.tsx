import type { Preview } from '@storybook/nextjs-vite'
import { NextIntlClientProvider } from 'next-intl'
import * as translations from '../app/i18n/messages/static-translations'
import '../app/globals.css'

const messages = Object.assign({}, ...Object.values(translations))

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/',
				query: {},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: 'todo',
		},
	},
	decorators: [
		(Story) => (
			<NextIntlClientProvider locale="en" messages={messages}>
				<Story />
			</NextIntlClientProvider>
		),
	],
}

export default preview

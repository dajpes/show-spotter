import {
	type RenderOptions,
	screen,
	render as testRender,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextIntlClientProvider } from 'next-intl'
import { Provider } from 'react-redux'
import * as translations from '../../i18n/messages/static-translations'
import { store } from '../../store/store'

const messages = Object.assign({}, ...Object.values(translations))

const render = (Component: React.ReactNode, options?: RenderOptions) => {
	const utils = testRender(
		<Provider store={store}>
			<NextIntlClientProvider locale="en" messages={messages}>
				{Component}
			</NextIntlClientProvider>
		</Provider>,
		options,
	)

	return {
		...utils,
		user: userEvent.setup(),
	}
}

// Access the global mockRouterPush from jest.setup.ts
const mockRouterPush = (global as Record<string, unknown>)
	.mockRouterPush as jest.Mock

export { render, screen, userEvent, mockRouterPush }

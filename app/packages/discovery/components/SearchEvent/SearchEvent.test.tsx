import { mockRouterPush, render, screen } from '@/app/packages/shared/testUtils'
import SearchEvent from './index'

describe('SearchEvent', () => {
	beforeEach(() => {
		mockRouterPush.mockClear()
	})

	it('renders the search input with correct placeholder', () => {
		render(<SearchEvent />)
		const input = screen.getByRole('textbox', { name: /search/i })
		expect(input.getAttribute('placeholder')).toMatch(/TV Shows/)
	})

	it('calls router.push with search query on form submit', async () => {
		const { user } = render(<SearchEvent />)

		const input = screen.getByPlaceholderText(/TV Shows/) as HTMLInputElement
		const button = screen.getByRole('button', { name: /search/i })

		await user.type(input, 'Breaking Bad')
		await user.click(button)

		expect(mockRouterPush).toHaveBeenCalledWith('/search?q=Breaking%20Bad')
	})

	it('calls router.push when Enter key is pressed', async () => {
		const { user } = render(<SearchEvent />)

		const input = screen.getByPlaceholderText(/TV Shows/) as HTMLInputElement

		await user.type(input, 'The Wire{Enter}')

		expect(mockRouterPush).toHaveBeenCalledWith('/search?q=The%20Wire')
	})
})

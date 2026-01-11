import { render, screen } from '@/app/packages/shared/testUtils'
import SearchEvent from './index'

describe('SearchEvent', () => {
	it('renders the search input with correct placeholder', () => {
		render(<SearchEvent />)
		const input = screen.getByRole('textbox', { name: /search/i })
		expect(input.getAttribute('placeholder')).toMatch(/TV Shows/)
	})

	it('calls onSubmit with search query on form submit', async () => {
		const handleSubmit = jest.fn()
		const { user } = render(<SearchEvent onSubmit={handleSubmit} />)

		const input = screen.getByPlaceholderText(/TV Shows/) as HTMLInputElement

		const button = screen.getByRole('button', { name: /search/i })

		await user.type(input, 'Breaking Bad')
		await user.click(button)

		expect(handleSubmit).toHaveBeenCalledWith('Breaking Bad')
	})

	it('submits form when Enter key is pressed', async () => {
		const handleSubmit = jest.fn()
		const { user } = render(<SearchEvent onSubmit={handleSubmit} />)

		const input = screen.getByPlaceholderText(/TV Shows/) as HTMLInputElement

		await user.type(input, 'The Wire{Enter}')

		expect(handleSubmit).toHaveBeenCalledWith('The Wire')
	})
})

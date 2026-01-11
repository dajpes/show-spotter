import { render, screen } from '@/app/packages/shared/testUtils'
import ShowDetailsError from '.'

describe('ShowDetailsError', () => {
	it('renders the error title', () => {
		render(<ShowDetailsError />)
		expect(
			screen.getByRole('heading', { name: /something went wrong/i }),
		).toBeInTheDocument()
	})

	it('renders the back to shows link', () => {
		render(<ShowDetailsError />)
		const link = screen.getByRole('link', { name: /back/i })
		expect(link).toHaveAttribute('href', '/')
	})
})

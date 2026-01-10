import { render, screen } from '../../testUtils'
import { ThemeProvider } from '../ThemeProvider'
import ThemeToggle from '.'

describe('ThemeToggle', () => {
	const setup = () => {
		return render(
			<ThemeProvider>
				<ThemeToggle />
			</ThemeProvider>,
		)
	}
	it('should toggle theme from dark to light', async () => {
		const { user } = setup()

		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Dark')

		await user.click(button)

		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Light')
	})

	it('should have theme based on the localStorage', () => {
		localStorage.setItem('theme', 'light')

		setup()

		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Dark')
	})

	it('should set theme to dark when browser prefers dark color scheme', () => {
		localStorage.clear()

		// Override matchMedia to simulate dark mode preference
		window.matchMedia = jest.fn().mockImplementation((query: string) => ({
			matches: query === '(prefers-color-scheme: light)',
			media: query,
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		}))

		setup()

		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Dark')
	})

	it('Should be able to change theme by pressing the enter key', async () => {
		const { user } = setup()

		const button = screen.getByRole('button')
		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Dark')

		await user.keyboard('{tab}')
		await user.keyboard('{enter}')

		expect(button).toHaveAttribute('aria-label', 'Toggle theme to Light')
	})
})

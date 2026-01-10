import { render, screen } from '../../testUtils'
import LocaleSwitcher from '.'

describe('LocaleSwitcher', () => {
	test('Button menu displays different languages', async () => {
		const { user } = render(<LocaleSwitcher initialLocale="en" />)
		const menuButton = screen.getByRole('button', { name: 'Select a language' })

		await user.click(menuButton)
		const enOption = screen.getByRole('menuitem', { name: /English/i })
		const esOption = screen.getByRole('menuitem', { name: /Spanish/i })

		expect(enOption).toBeInTheDocument()
		expect(esOption).toBeInTheDocument()
	})

	test('Should select language using keyboard', async () => {
		const { user } = render(<LocaleSwitcher initialLocale="en" />)

		await user.keyboard('{tab}')
		await user.keyboard('{enter}') // Opens menu

		// First item (English) is focused by default
		const enOption = screen.getByRole('menuitem', { name: /English/i })
		expect(enOption).toHaveAttribute('data-focus')

		await user.keyboard('{ArrowDown}')

		// Now Spanish should be focused
		const esOption = screen.getByRole('menuitem', { name: /Spanish/i })
		expect(esOption).toHaveAttribute('data-focus')

		// And English should no longer have focus
		expect(enOption).not.toHaveAttribute('data-focus')
	})
	test(`Should show 'selected' message when language is selected`, async () => {
		const { user } = render(<LocaleSwitcher initialLocale="en" />)
		const menuButton = screen.getByRole('button', {
			name: /Select a language/i,
		})

		await user.click(menuButton)

		const enOption = screen.getByRole('menuitem', { name: /English Selected/i })

		expect(enOption).toBeInTheDocument()
	})
})

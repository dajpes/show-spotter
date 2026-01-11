import type { ShowDetailsResponse } from '@/app/packages/shared/api/schemas/showDetails'
import { render, screen } from '@/app/packages/shared/testUtils'
import ShowDetails from '.'

const mockShow = {
	id: 1,
	url: 'https://example.com',
	name: 'Breaking Bad',
	type: 'Scripted',
	language: 'English',
	genres: ['Drama', 'Crime'],
	status: 'Ended',
	runtime: 60,
	averageRuntime: 60,
	premiered: '2008-01-20',
	ended: '2013-09-29',
	officialSite: 'https://www.amc.com/shows/breaking-bad',
	schedule: {
		time: '22:00',
		days: ['Sunday'],
	},
	rating: {
		average: 9.5,
	},
	network: {
		id: 1,
		name: 'AMC',
		country: {
			name: 'United States',
			code: 'US',
			timezone: 'America/New_York',
		},
		officialSite: 'https://www.amc.com',
	},
	webChannel: null,
	image: {
		medium: 'https://example.com/medium.jpg',
		original: 'https://example.com/original.jpg',
	},
	summary: '<p>A chemistry teacher diagnosed with cancer.</p>',
} satisfies ShowDetailsResponse

describe('ShowDetailsView', () => {
	it('renders the show name as heading', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			/Breaking Bad/,
		)
	})

	it('displays the show type badge', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('Scripted')).toBeInTheDocument()
	})

	it('displays the show status', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('Ended')).toBeInTheDocument()
	})

	it('displays the rating when available', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText(/★ 9.5/)).toBeInTheDocument()
	})

	it('displays genres', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('Drama')).toBeInTheDocument()
		expect(screen.getByText('Crime')).toBeInTheDocument()
	})

	it('displays the summary', () => {
		render(<ShowDetails show={mockShow} />)
		expect(
			screen.getByText('A chemistry teacher diagnosed with cancer.'),
		).toBeInTheDocument()
	})

	it('displays the network name', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('AMC')).toBeInTheDocument()
	})

	it('displays the schedule', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('Sunday @ 22:00')).toBeInTheDocument()
	})

	it('displays the premiered date', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('2008-01-20')).toBeInTheDocument()
	})

	it('displays the runtime', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByText('60 min')).toBeInTheDocument()
	})

	it('displays the show image', () => {
		render(<ShowDetails show={mockShow} />)
		const img = screen.getByRole('img', { name: 'Breaking Bad' })
		expect(img).toHaveAttribute('src', 'https://example.com/original.jpg')
	})

	it('displays no image text when image is null', () => {
		const showWithoutImage = { ...mockShow, image: null }
		render(<ShowDetails show={showWithoutImage} />)
		expect(screen.getByText(/No Image/i)).toBeInTheDocument()
	})

	it('displays the back link', () => {
		render(<ShowDetails show={mockShow} />)
		expect(screen.getByRole('link', { name: /back/i })).toHaveAttribute(
			'href',
			'/',
		)
	})

	it('displays official site link when available', () => {
		render(<ShowDetails show={mockShow} />)
		const link = screen.getByRole('link', { name: /visit/i })
		expect(link).toHaveAttribute(
			'href',
			'https://www.amc.com/shows/breaking-bad',
		)
		expect(link).toHaveAttribute('target', '_blank')
	})
})

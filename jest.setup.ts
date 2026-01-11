import '@testing-library/jest-dom'

// Mock window.matchMedia which is not available in JSDOM
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
})

// Next.js navigation mocks - exported globally for test assertions
export const mockRouterPush = jest.fn()
export const mockSearchParams = new URLSearchParams()

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(() => ({ push: mockRouterPush })),
	useSearchParams: jest.fn(() => mockSearchParams),
}))

// Make mockRouterPush available globally for tests
;(global as Record<string, unknown>).mockRouterPush = mockRouterPush

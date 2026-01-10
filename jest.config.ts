import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	dir: './',
})

// Custom Jest config
const customJestConfig: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
}

// Export async function to ensure Next.js config is applied first
export default async () => ({
	...(await createJestConfig(customJestConfig)()),
	// https://github.com/vercel/next.js/issues/40183
	transformIgnorePatterns: ['node_modules/(?!next-intl)/'],
})

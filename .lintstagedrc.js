export default {
	'*.{ts,tsx,css}': 'npm run lint',
	'*.{ts,tsx}': [
		'npm run circular-deps',
		'jest --bail --passWithNoTests --findRelatedTests',
	],
}

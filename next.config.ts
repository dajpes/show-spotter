import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.tvmaze.com',
				pathname: '/uploads/images/**',
			},
		],
	},
}
// https://static.tvmaze.com/uploads/images/original_untouched/596/1491814.jpg
const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts')
export default withNextIntl(nextConfig)

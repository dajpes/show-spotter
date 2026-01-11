import { StarIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
export default function Rating({ rating }: { rating: number }) {
	const __ = useTranslations()
	return (
		<span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm flex items-center">
			<StarIcon className="w-4 h-4 fill-yellow-800" />
			{rating}
			<span className="sr-only">{__('rating.description')}</span>
		</span>
	)
}

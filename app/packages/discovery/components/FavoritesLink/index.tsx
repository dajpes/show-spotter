import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useSelector } from 'react-redux'
import { selectFavoritesCount } from '@/app/store/favoritesSlice'

export default function FavoritesLink() {
	const __ = useTranslations()
	const count = useSelector(selectFavoritesCount)

	return (
		<Link
			href="/favorites"
			className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
			aria-label={__('favorites.title')}
		>
			{count > 0 ? (
				<HeartSolid className="w-6 h-6 fill-red-500" />
			) : (
				<HeartOutline className="w-6 h-6" />
			)}
			{count > 0 && (
				<span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
					{count}
				</span>
			)}
		</Link>
	)
}

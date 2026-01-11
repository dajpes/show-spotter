'use client'

import { Button } from '@headlessui/react'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import type { Show } from '@/app/packages/shared/api/schemas/shows'
import { selectIsFavorite, toggleFavorite } from '@/app/store/favoritesSlice'

export default function FavoriteButton({ show }: { show: Show }) {
	const __ = useTranslations()
	const dispatch = useDispatch()
	const isFavorite = useSelector(selectIsFavorite(show.id))

	return (
		<Button
			type="button"
			onClick={() => dispatch(toggleFavorite(show))}
			aria-pressed={isFavorite}
			aria-label={
				isFavorite
					? __('favorites.remove', { show: show.name })
					: __('favorites.add', { show: show.name })
			}
			className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-md cursor-pointer focusable"
		>
			{isFavorite ? (
				<HeartSolid className="w-6 h-6 fill-red-500" />
			) : (
				<HeartOutline className="w-6 h-6" />
			)}
		</Button>
	)
}

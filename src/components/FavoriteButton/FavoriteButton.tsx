import { useState } from 'react'
import styles from './FavoriteButton.module.css'
import cn from 'classnames'

function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)

	const buttonStatus = {
		icon: isFavorite ? '/icons/bookmark.svg' : '/icons/favorite.svg',
		text: isFavorite ? 'В избранном' : 'В избранное',
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault() // Для предотвращения перехода на страницу фильма
		setIsFavorite((prev) => !prev)
	}

	return (
		<button
			onClick={handleClick}
			className={cn(styles['favorite-button'], {
				[styles.active]: isFavorite,
			})}
		>
			<img
				src={buttonStatus.icon}
				alt='Иконка кнопки'
				className={styles['icon']}
			/>
			{buttonStatus.text}
		</button>
	)
}

export default FavoriteButton

import { Link } from 'react-router-dom'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import type { movieList } from '../MovieList/MovieList.props'
import styles from './MovieCard.module.css'

function MovieCard({ ...props }: movieList) {
	const coverPath = '/movie-covers/' + props.cover + '.png'

	return (
		<Link to={`/movie/${props.id}`} className={styles['movie-card']}>
			<div className={styles['wrapper']}>
				<span className={styles['rating']}>
					<img
						className={styles['rating-icon']}
						src='/icons/rating.svg'
						alt='Иконка рейтинга'
					/>
					{props.rating}
				</span>
				<div className={styles['card-cover']}>
					<img src={coverPath} alt='Обложка фильма' />
				</div>
				<div className={styles['card-info']}>
					<h2 className={styles['title']}>{props.title}</h2>
				</div>
				<div className={styles.action}>
					<FavoriteButton />
				</div>
			</div>
		</Link>
	)
}
export default MovieCard

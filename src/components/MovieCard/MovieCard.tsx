import { Link } from 'react-router-dom'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import styles from './MovieCard.module.css'
import type { MovieProps } from '../../context/movies-context.props'

function MovieCard({ ...props }: MovieProps) {
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
					<img
						src={props.cover ? props.cover : undefined}
						alt='Обложка фильма'
					/>
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

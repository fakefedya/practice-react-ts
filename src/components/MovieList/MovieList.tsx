import { MOVIE_LIST } from './MovieList.data'

import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'

function MovieList() {
	if (MOVIE_LIST.length === 0) return <MoviesNotFound />

	return (
		<div className={styles['movie-list']}>
			{MOVIE_LIST.map((movie) => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					rating={movie.rating}
					cover={movie.cover}
				/>
			))}
		</div>
	)
}

export default MovieList

import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import { useMovies } from '../../hooks/use-movies.hook'
import Loader from '../Loader/Loader'

function MovieList() {
	const { movies, isLoading, error, isSearchPerformed } = useMovies()

	if (isLoading) return <Loader />
	if (error) return <div className={styles['error']}>Ошибка: {error}</div>
	if (!isSearchPerformed) return
	if (movies.length === 0) return <MoviesNotFound />

	return (
		<div className={styles['movie-list']}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					rating={movie.rating || 0}
					cover={movie.cover}
				/>
			))}
		</div>
	)
}

export default MovieList

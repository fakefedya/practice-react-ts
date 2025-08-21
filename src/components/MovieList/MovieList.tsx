import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Loader from '../Loader/Loader'
import type { LoaderMovieSearchProps } from '../../interfaces/loader.interface'

function MovieList() {
	const { movies, isSearchPerformed } =
		useLoaderData() as LoaderMovieSearchProps
	const navigation = useNavigation()

	if (!movies || movies.length === 0) return null

	if (isSearchPerformed && movies.length === 0) return <MoviesNotFound />

	if (navigation.state === 'loading') {
		return <Loader />
	}

	return (
		<section>
			<div className={styles['movie-list']}>
				{movies.map((movie) => (
					<MovieCard
						key={movie['#IMDB_ID']}
						id={movie['#IMDB_ID']}
						title={movie['#TITLE']}
						rating={movie['#RANK'] || 0}
						cover={movie['#IMG_POSTER']}
					/>
				))}
			</div>
		</section>
	)
}

export default MovieList

import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import { useLoaderData, useNavigation } from 'react-router-dom'
import type { LoaderDataProps } from '../../interfaces/loader.interface'
import Loader from '../Loader/Loader'
import { useMemo } from 'react'

function MovieList() {
	const { movies, isSearchPerformed } = useLoaderData() as LoaderDataProps
	const navigation = useNavigation()

	const movieCards = useMemo(() => {
		if (!movies || movies.length === 0) return null

		return movies.map((movie) => (
			<MovieCard
				key={movie['#IMDB_ID']}
				id={movie['#IMDB_ID']}
				title={movie['#TITLE']}
				rating={movie['#RANK'] || 0}
				cover={movie['#IMG_POSTER']}
			/>
		))
	}, [movies])

	if (isSearchPerformed && movies.length === 0) return <MoviesNotFound />

	if (navigation.state === 'loading') {
		return <Loader />
	}

	return (
		<section>
			<div className={styles['movie-list']}>{movieCards}</div>
		</section>
	)
}

export default MovieList

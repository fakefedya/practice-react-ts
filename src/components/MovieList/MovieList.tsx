import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import { useLoaderData } from 'react-router-dom'
import type { LoaderDataProps } from '../../interfaces/loader.interface'
import { Suspense } from 'react'
import Loader from '../Loader/Loader'

function MovieList() {
	const { movies, isSearchPerformed } = useLoaderData() as LoaderDataProps

	if (isSearchPerformed && movies.length === 0) return <MoviesNotFound />

	return (
		<Suspense fallback={<Loader />}>
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
		</Suspense>
	)
}

export default MovieList

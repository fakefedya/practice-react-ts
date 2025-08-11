import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import { Await, useLoaderData } from 'react-router-dom'
import type { LoaderDataProps } from '../../interfaces/loader.interface'
import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import Error from '../../pages/Error/Error'

function MovieList() {
	const { movies, error, isSearchPerformed } =
		useLoaderData() as LoaderDataProps

	if (error) return <div className={styles['error']}>Ошибка: {error}</div>
	if (!isSearchPerformed) return

	return (
		<Suspense fallback={<Loader />}>
			<Await resolve={movies} errorElement={<Error />}>
				{(resolvedMovies) => {
					if (resolvedMovies.length === 0) return <MoviesNotFound />
					return (
						<div className={styles['movie-list']}>
							{resolvedMovies.map((movie) => (
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
				}}
			</Await>
		</Suspense>
	)
}

export default MovieList

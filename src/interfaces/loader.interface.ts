import type { MovieDetailsProps } from './movie-details.interface'
import type { MovieProps } from './movie-search.interface'

export interface LoaderMovieSearchProps {
	movies: MovieProps[]
	error: string | null
	isSearchPerformed: boolean
}

export interface LoaderMovieDetailsProps {
	movie: MovieDetailsProps
	movieId: string
}

import type { MovieDetailsProps } from './movie-details.interface'
import type { APIMovieProps } from './movie-search.interface'

export interface LoaderMovieSearchProps {
	movies: APIMovieProps[]
	error: string | null
	isSearchPerformed: boolean
}

export interface LoaderMovieDetailsProps {
	movie: MovieDetailsProps
	movieId: string
}

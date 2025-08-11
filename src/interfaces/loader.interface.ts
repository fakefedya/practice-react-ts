import type { MovieProps } from './movie.interface'

export interface LoaderDataProps {
	movies: MovieProps[]
	error: string | null
	isSearchPerformed: boolean
}

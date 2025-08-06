import type { ReactNode } from 'react'

export interface MovieProps {
	id: number
	title: string
	rating: number
	cover?: string | undefined
}

export interface FullMovieProps {
	'#TITLE': string
	'#YEAR': number
	'#IMDB_ID': string
	'#RANK': number
	'#ACTORS': string
	'#AKA': string
	'#IMDB_URL': string
	'#IMDB_IV': string
	'#IMG_POSTER': string
	photo_width: number
	photo_height: number
}

export interface MoviesState {
	movies: MovieProps[]
	isLoading: boolean
	error: string | null
	isSearchPerformed: boolean
}

export type MoviesAction =
	| { type: 'FETCH_START' }
	| { type: 'FETCH_SUCCESS'; payload: MovieProps[] }
	| { type: 'FETCH_ERROR'; payload: string }

export interface MoviesContextType {
	movies: MovieProps[]
	isLoading: boolean
	error: string | null
	isSearchPerformed: boolean
	fetchMovies: (query: string) => Promise<void>
}

export interface MoviesProviderProps {
	children: ReactNode
}

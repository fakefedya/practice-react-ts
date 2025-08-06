import { createContext, useCallback, useReducer } from 'react'
import type {
	FullMovieProps,
	MovieProps,
	MoviesAction,
	MoviesContextType,
	MoviesProviderProps,
	MoviesState,
} from './movies-context.props'
import { SEARCH_PREFIX } from '../helpers/API'

const INITIAL_STATE: MoviesState = {
	movies: [],
	isLoading: false,
	error: null,
	isSearchPerformed: false,
}

function moviesReducer(state: MoviesState, action: MoviesAction): MoviesState {
	switch (action.type) {
		case 'FETCH_START':
			return { ...state, isLoading: true, error: null, isSearchPerformed: true }
		case 'FETCH_SUCCESS':
			return {
				...state,
				movies: action.payload,
				isLoading: false,
				error: null,
				isSearchPerformed: true,
			}
		case 'FETCH_ERROR':
			return {
				...state,
				isLoading: false,
				error: action.payload,
				isSearchPerformed: true,
			}
		default:
			return state
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext = createContext<MoviesContextType | undefined>(
	undefined
)

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
	const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE)

	const fetchMovies = useCallback(async (query: string) => {
		if (!query.trim()) return

		dispatch({ type: 'FETCH_START' })
		try {
			const response = await fetch(
				`${SEARCH_PREFIX}?q=${encodeURIComponent(query)}`
			)
			if (!response.ok) throw new Error('Ошибка при загрузке фильмов')
			const data = await response.json()
			const movies: MovieProps[] = data.description.map(
				(item: FullMovieProps) => ({
					id: item['#IMDB_ID'],
					title: item['#TITLE'],
					rating: item['#RANK'],
					cover: item['#IMG_POSTER'] || '',
				})
			)
			dispatch({ type: 'FETCH_SUCCESS', payload: movies })
		} catch (error) {
			dispatch({
				type: 'FETCH_ERROR',
				payload: error instanceof Error ? error.message : 'Неизвестная ошибка',
			})
		}
	}, [])

	return (
		<MoviesContext.Provider
			value={{
				movies: state.movies,
				isLoading: state.isLoading,
				error: state.error,
				fetchMovies,
				isSearchPerformed: state.isSearchPerformed,
			}}
		>
			{children}
		</MoviesContext.Provider>
	)
}

import { useContext } from 'react'
import type { MoviesContextType } from '../context/movies-context.props'
import { MoviesContext } from '../context/movies-context'

export const useMovies = (): MoviesContextType => {
	const context = useContext(MoviesContext)
	if (!context)
		throw new Error('useMovies должен использоваться внутри MoviesProvider')

	return context
}

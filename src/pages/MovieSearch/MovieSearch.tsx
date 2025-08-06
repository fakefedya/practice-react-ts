import MovieList from '../../components/MovieList/MovieList'
import Search from '../../components/Search/Search'
import { MoviesProvider } from '../../context/movies-context'

function MovieSearch() {
	return (
		<MoviesProvider>
			<section>
				<Search />
			</section>
			<section>
				<MovieList />
			</section>
		</MoviesProvider>
	)
}

export default MovieSearch

import MovieList from '../../components/MovieList/MovieList'
import Search from '../../components/Search/Search'

function MovieSearch() {
	return (
		<>
			<section>
				<Search />
			</section>
			<section>
				<MovieList />
			</section>
		</>
	)
}

export default MovieSearch

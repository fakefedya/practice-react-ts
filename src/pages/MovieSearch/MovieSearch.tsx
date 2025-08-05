import MovieList from '../../components/MovieList/MovieList'
import MovieSearch from '../../components/MovieSearch/MovieSearch'

function Home() {
	return (
		<>
			<section>
				<MovieSearch />
			</section>
			<section>
				<MovieList />
			</section>
		</>
	)
}

export default Home

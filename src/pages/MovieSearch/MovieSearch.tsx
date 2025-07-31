import MovieList from '../../components/MovieList/MovieList'
import MovieSearch from '../../components/MovieSearch/MovieSearch'
import Section from '../../components/Section/Section'

function Home() {
	return (
		<>
			<Section>
				<MovieSearch />
			</Section>
			<Section>
				<MovieList />
			</Section>
		</>
	)
}

export default Home

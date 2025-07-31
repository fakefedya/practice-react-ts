import type { movieList } from './MovieList.props'

import styles from './MovieList.module.css'
import MovieCard from '../MovieCard/MovieCard'

function MovieList() {
	const MOVIE_LIST: movieList[] = [
		{
			id: 1,
			title: 'Black Widow',
			rating: 324,
			cover: 'black-widow',
		},
		{
			id: 2,
			title: 'Shang Chi',
			rating: 124,
			cover: 'shang-chi',
		},
		{
			id: 3,
			title: 'Loki',
			rating: 235,
			cover: 'loki',
		},
		{
			id: 4,
			title: 'How I Met Your Mother',
			rating: 123,
			cover: 'how-i-met-your-mother',
		},
		{
			id: 5,
			title: 'Money Heist',
			rating: 8125,
			cover: 'money-heist',
		},
		{
			id: 6,
			title: 'Friends',
			rating: 123,
			cover: 'friends',
		},
		{
			id: 7,
			title: 'The Big Bang Theory',
			rating: 1211,
			cover: 'the-big-bang-theory',
		},
		{
			id: 8,
			title: 'Two And a Half Men',
			rating: 456,
			cover: 'two-and-a-half-men',
		},
	]

	if (MOVIE_LIST.length === 0) return <p>Фильмы отсутствуют</p>

	return (
		<div className={styles['movie-list']}>
			{MOVIE_LIST.map((movie) => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					rating={movie.rating}
					cover={movie.cover}
				/>
			))}
		</div>
	)
}

export default MovieList

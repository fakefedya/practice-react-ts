import { useLoaderData } from 'react-router-dom'

export function Movie() {
	const { movie } = useLoaderData()

	return <section>Имя = {movie.name}</section>
}

export default Movie

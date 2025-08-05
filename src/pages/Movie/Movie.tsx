import { useParams } from 'react-router-dom'

function Movie() {
	const { id } = useParams()

	return <section>Movie ID = {id}</section>
}

export default Movie

import { useParams } from 'react-router-dom'
import Section from '../../components/Section/Section'

function Movie() {
	const { id } = useParams()

	return <Section>Movie ID = {id}</Section>
}

export default Movie

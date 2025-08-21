import { useLoaderData } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import styles from './movie.module.css'
import type { LoaderMovieDetailsProps } from '../../interfaces/loader.interface'

export function Movie() {
	const { movie } = useLoaderData() as LoaderMovieDetailsProps

	return (
		<section className={styles['hero-section']}>
			<div className={styles['hero-container']}>
				<Paragraph appearance='small'>Поиск фильмов</Paragraph>
				<Heading appearance='medium'>{movie.name}</Heading>
			</div>
		</section>
	)
}

export default Movie

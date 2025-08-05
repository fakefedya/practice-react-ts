import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import styles from './MoviesNotFound.module.css'

function MoviesNotFound() {
	return (
		<div className={styles['container']}>
			<Heading>Упс... Ничего не найдено</Heading>
			<Paragraph>
				Попробуйте изменить запрос или ввести более точное название фильма
			</Paragraph>
		</div>
	)
}

export default MoviesNotFound

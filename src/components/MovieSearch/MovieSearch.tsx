import Button from '../Button/Button'
import Input from '../Input/Input'
import Paragraph from '../Paragraph/Paragraph'
import styles from './MovieSearch.module.css'

function MovieSearch() {
	return (
		<div className={styles['movie-search']}>
			<h1 className={styles.heading}>Поиск</h1>
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</Paragraph>
			<div className={styles['action-wrapper']}>
				<Input id='search' appearance='search' placeholder='Введите название' />
				<Button>Искать</Button>
			</div>
		</div>
	)
}

export default MovieSearch

import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import Input from '../Input/Input'
import Paragraph from '../Paragraph/Paragraph'
import styles from './Search.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Search() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const [query, setQuery] = useState(searchParams.get('q') || '')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (query.trim()) {
			navigate(`/?q=${encodeURIComponent(query)}`)
		}
	}

	return (
		<section>
			<div className={styles['movie-search']}>
				<Heading>Поиск</Heading>
				<Paragraph>
					Введите название фильма, сериала или мультфильма для поиска и
					добавления в избранное.
				</Paragraph>
				<form className={styles['action-wrapper']} onSubmit={handleSubmit}>
					<Input
						id='search'
						appearance='search'
						placeholder='Введите название'
						value={query}
						onChange={handleChange}
					/>
					<Button type='submit'>Искать</Button>
				</form>
			</div>
		</section>
	)
}

export default Search

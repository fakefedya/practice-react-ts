import Section from '../../components/Section/Section'
import styles from './Footer.module.css'

function Footer() {
	return (
		<footer className={styles['footer']}>
			<Section>
				<div className={styles['wrapper']}>
					<p>Копирование запрещено</p>
				</div>
			</Section>
		</footer>
	)
}

export default Footer

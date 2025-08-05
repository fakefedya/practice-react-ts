import styles from './Footer.module.css'

function Footer() {
	return (
		<footer className={styles['footer']}>
			<section>
				<div className={styles['wrapper']}>
					<p>Копирование запрещено</p>
				</div>
			</section>
		</footer>
	)
}

export default Footer

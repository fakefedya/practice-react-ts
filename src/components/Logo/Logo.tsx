import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

function Logo() {
	return (
		<div className={styles['logo']}>
			<Link to='/' className={styles['link']}>
				<img className={styles['icon']} src='/icons/logo.svg' alt='Логотип' />
			</Link>
		</div>
	)
}
export default Logo

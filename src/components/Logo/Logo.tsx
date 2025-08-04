import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

function Logo() {
	return (
		<Link to='/' className={styles['logo']}>
			<img className={styles['icon']} src='/icons/logo.svg' alt='Логотип' />
		</Link>
	)
}
export default Logo

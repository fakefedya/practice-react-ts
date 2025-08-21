import Heading from '../Heading/Heading'
import styles from './Loader.module.css'

function Loader() {
	return (
		<div className={styles['container']}>
			<Heading>Загрузка...</Heading>
		</div>
	)
}

export default Loader

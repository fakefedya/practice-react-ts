import type { HeaderProps } from './Header.props'

import styles from './Header.module.css'

function Header({ children, classname = 'header' }: HeaderProps) {
	return (
		<header className={styles[classname]}>
			<div className={styles['container']}>{children}</div>
		</header>
	)
}

export default Header

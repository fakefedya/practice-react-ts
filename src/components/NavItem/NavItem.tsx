import { NavLink } from 'react-router-dom'
import type { User } from '../../context/user-context.props'
import type { NavItemProps } from './NavItem.props'

import styles from './NavItem.module.css'
import cn from 'classnames'
import Button from '../Button/Button'

function NavItem({
	link,
	activeUser,
	handleLogout,
}: {
	link: NavItemProps
	activeUser: User | undefined
	handleLogout: () => void
}) {
	switch (link.id) {
		case 2:
			return (
				<li className={styles['nav-item']}>
					<NavLink
						to={link.href ?? '*'}
						className={({ isActive }) =>
							cn(styles['item-link'], { [styles.active]: isActive })
						}
					>
						{link.text}
						<span className={styles['link-badge']}>
							{activeUser?.favoriteMovies?.length || 0}
						</span>
					</NavLink>
				</li>
			)
		case 3:
			return (
				<li className={styles['nav-item']}>
					<div className={styles['item-user']}>
						{link.text}
						<img src='/public/icons/user.svg' alt='Иконка профиля' />
					</div>
				</li>
			)
		case 4:
			return activeUser ? (
				<li className={styles['nav-item']}>
					<Button appearance='nav' onClick={handleLogout}>
						{link.text}
					</Button>
				</li>
			) : (
				<li className={styles['nav-item']}>
					<NavLink
						to={link.href ?? '*'}
						className={({ isActive }) =>
							cn(styles['item-link'], { [styles.active]: isActive })
						}
					>
						{link.text}
					</NavLink>
				</li>
			)
		default:
			return (
				<li className={styles['nav-item']}>
					<NavLink
						to={link.href ?? '*'}
						className={({ isActive }) =>
							cn(styles['item-link'], { [styles.active]: isActive })
						}
					>
						{link.text}
					</NavLink>
				</li>
			)
	}
}

export default NavItem

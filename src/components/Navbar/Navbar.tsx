import { type JSX } from 'react'
import type { NavbarProps } from './Navbar.props'
import styles from './Navbar.module.css'
import cn from 'classnames'
import { useUser } from '../../hooks/use-user.hook'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

function Navbar() {
	const { activeUser, handleLogout } = useUser()

	const NAVIGATION_LINKS: NavbarProps[] = [
		{ id: 1, text: 'Поиск фильмов', href: '/' },
		{ id: 2, text: 'Мои фильмы', href: '/favorites' },
		...(activeUser ? [{ id: 3, text: activeUser.name }] : []),
		{
			id: 4,
			text: activeUser ? 'Выход' : 'Войти',
			href: activeUser ? '' : '/login',
		},
	]

	const navItem: JSX.Element[] = NAVIGATION_LINKS.map((link: NavbarProps) => {
		switch (link.id) {
			case 2: {
				return (
					<li className={styles['nav-item']} key={link.id}>
						<NavLink
							to={link.href ? link.href : '*'}
							className={({ isActive }) =>
								cn(styles['item-link'], {
									[styles.active]: isActive,
								})
							}
						>
							{link.text}
							<span className={styles['link-badge']}>
								{activeUser?.favoriteMovies?.length || 0}
							</span>
						</NavLink>
					</li>
				)
			}
			case 3: {
				return (
					<li className={styles['nav-item']} key={link.id}>
						<div className={styles['item-user']}>
							{link.text}
							<img src='/public/icons/user.svg' alt='Иконка профиля' />
						</div>
					</li>
				)
			}
			case 4: {
				return activeUser ? (
					<li className={styles['nav-item']} key={link.id}>
						<Button appearance='nav' key={link.id} onClick={handleLogout}>
							{link.text}
							{!activeUser && (
								<img src='/public/icons/login.svg' alt='Иконка профиля' />
							)}
						</Button>
					</li>
				) : (
					<li className={styles['nav-item']} key={link.id}>
						<NavLink
							to={link.href ? link.href : '*'}
							className={({ isActive }) =>
								cn(styles['item-link'], {
									[styles.active]: isActive,
								})
							}
						>
							{link.text}
						</NavLink>
					</li>
				)
				// return (
				// 	<li className={styles['nav-item']} key={link.id}>
				// 		<Button appearance='nav' key={link.id} onClick={handleLogout}>
				// 			{link.text}
				// 			{!activeUser && (
				// 				<img src='/public/icons/login.svg' alt='Иконка профиля' />
				// 			)}
				// 		</Button>
				// 	</li>
				// )
			}
			default:
				return (
					<li className={styles['nav-item']} key={link.id}>
						<NavLink
							to={link.href ? link.href : '*'}
							className={({ isActive }) =>
								cn(styles['item-link'], {
									[styles.active]: isActive,
								})
							}
						>
							{link.text}
						</NavLink>
					</li>
				)
		}
	})

	return (
		<nav>
			<ul className={styles['nav-list']}>{navItem}</ul>
		</nav>
	)
}

export default Navbar

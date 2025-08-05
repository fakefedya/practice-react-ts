import styles from './Navbar.module.css'
import { useUser } from '../../hooks/use-user.hook'
import type { NavItemProps } from '../NavItem/NavItem.props'
import { dynamicLinks, STATIC_LINKS } from '../NavItem/navigationLinks'
import NavItem from '../NavItem/NavItem'

function Navbar() {
	const { activeUser, handleLogout } = useUser()

	const navigationLinks: NavItemProps[] = [
		...STATIC_LINKS,
		...dynamicLinks(activeUser),
	].sort((a, b) => a.id - b.id)

	return (
		<nav>
			<ul className={styles['nav-list']}>
				{navigationLinks.map((link) => (
					<NavItem
						key={link.id}
						link={link}
						activeUser={activeUser}
						handleLogout={handleLogout}
					/>
				))}
			</ul>
		</nav>
	)
}

export default Navbar

import { Outlet } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'
import styles from './Layout.module.css'
import { UserProvider } from '../../context/user-context'
import Footer from '../Footer/Footer'

function Layout() {
	return (
		<UserProvider>
			<div className={styles['layout']}>
				<Header>
					<Logo />
					<Navbar />
				</Header>
				<Outlet />
				<Footer />
			</div>
		</UserProvider>
	)
}

export default Layout

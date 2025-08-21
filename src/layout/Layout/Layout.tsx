import { Outlet } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'
import styles from './Layout.module.css'
import Footer from '../Footer/Footer'

function Layout() {
	return (
		<div className={styles['layout']}>
			<Header>
				<Logo />
				<Navbar />
			</Header>
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout

import type { User } from '../../context/user-context.props'
import type { NavItemProps } from './NavItem.props'

export const STATIC_LINKS: NavItemProps[] = [
	{ id: 1, text: 'Поиск фильмов', href: '/' },
	{ id: 2, text: 'Мои фильмы', href: '/favorites' },
]

export const dynamicLinks = (activeUser: User | undefined): NavItemProps[] => [
	...(activeUser ? [{ id: 3, text: activeUser.name }] : []),
	{
		id: 4,
		text: activeUser ? 'Выход' : 'Войти',
		href: activeUser ? '' : '/login',
	},
]

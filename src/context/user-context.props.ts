import type { ReactNode } from 'react'

export interface User {
	id: string
	name: string
	isLogin: boolean
	favoriteMovies: string[]
}

export interface UserContextType {
	users: User[]
	activeUser: User | undefined
	handleLogin: (name: string) => void
	handleLogout: () => void
}

export interface UserProviderProps {
	children: ReactNode
}

export interface AuthState {
	users: User[]
}

export type AuthAction =
	| { type: 'LOAD_FROM_STORAGE' }
	| { type: 'LOGIN'; name: string }
	| { type: 'LOGOUT' }
	| { type: 'ADD_FAVORITE_MOVIE'; movieId: string }

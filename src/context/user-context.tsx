import { createContext, useReducer, useEffect } from 'react'
import type {
	AuthAction,
	AuthState,
	User,
	UserContextType,
	UserProviderProps,
} from './user-context.props'

const LOCALSTORAGE_KEY: string = 'reactProjectUsers'

const INITIAL_STATE: AuthState = {
	users: [],
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case 'LOAD_FROM_STORAGE': {
			const savedUsers = localStorage.getItem(LOCALSTORAGE_KEY)
			if (!savedUsers) return state
			const parsedUsers: User[] = JSON.parse(savedUsers)
			return {
				users: parsedUsers,
			}
		}
		case 'LOGIN': {
			const trimmedName = action.name.trim()
			if (!trimmedName) return state
			const existingUser = state.users.find((user) => user.name === trimmedName)
			const userId = Date.now().toString()
			const updatedUsers = existingUser
				? state.users.map((user) =>
						user.name === trimmedName ? { ...user, isLogin: true } : user
				  )
				: [
						...state.users,
						{
							id: userId,
							name: trimmedName,
							isLogin: true,
							favoriteMovies: [],
						},
				  ]
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedUsers))
			return {
				users: updatedUsers,
			}
		}
		case 'LOGOUT': {
			const updatedUsers = state.users.map((user) =>
				user.isLogin ? { ...user, isLogin: false } : user
			)
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedUsers))
			return {
				users: updatedUsers,
			}
		}
		case 'ADD_FAVORITE_MOVIE': {
			const updatedUsers = state.users.map((user) =>
				user.isLogin
					? {
							...user,
							favoriteMovies: [...user.favoriteMovies, action.movieId],
					  }
					: user
			)
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedUsers))
			return {
				users: updatedUsers,
			}
		}
		default:
			return state
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: UserProviderProps) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

	useEffect(() => {
		dispatch({ type: 'LOAD_FROM_STORAGE' })
	}, [])

	const handleLogin = (name: string) => {
		dispatch({ type: 'LOGIN', name })
	}

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
	}

	const activeUser = state.users.find((user) => user.isLogin)

	const value: UserContextType = {
		users: state.users,
		activeUser,
		handleLogin,
		handleLogout,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

import { createContext, useReducer, useEffect, useMemo, useState } from 'react'
import type {
	AuthAction,
	AuthState,
	UserContextType,
	UserProviderProps,
} from './user-context.props'

const LOCALSTORAGE_KEY: string = 'reactProjectUsers'

const INITIAL_STATE: AuthState = {
	users: [],
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case 'LOAD': {
			return { users: action.payload }
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
			return { users: updatedUsers }
		}
		case 'LOGOUT': {
			const updatedUsers = state.users.map((user) =>
				user.isLogin ? { ...user, isLogin: false } : user
			)
			return { users: updatedUsers }
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
			return { users: updatedUsers }
		}
		default:
			return state
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: UserProviderProps) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	useEffect(() => {
		const savedUsers = localStorage.getItem(LOCALSTORAGE_KEY)
		if (savedUsers) {
			dispatch({ type: 'LOAD', payload: JSON.parse(savedUsers) })
		}
		setIsLoaded(true)
	}, [])

	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state.users))
		}
	}, [state.users, isLoaded])

	const handleLogin = (name: string) => {
		dispatch({ type: 'LOGIN', name })
	}

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
	}

	const activeUser = useMemo(
		() => state.users.find((user) => user.isLogin),
		[state.users]
	)

	const value: UserContextType = {
		users: state.users,
		activeUser,
		handleLogin,
		handleLogout,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

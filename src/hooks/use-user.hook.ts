import { useContext } from 'react'
import type { UserContextType } from '../context/user-context.props'
import { UserContext } from '../context/user-context'

export const useUser = (): UserContextType => {
	const context = useContext(UserContext)

	if (!context) {
		throw new Error('Ошибка, хук должен использоваться с UserProvider')
	}
	return context
}

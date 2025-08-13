import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const authToken = localStorage.getItem('authToken')

	if (!authToken) {
		return <Navigate to='/login' replace />
	}

	return children
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout/Layout.tsx'
import Login from './pages/Login/Login.tsx'
import MovieSearch from './pages/MovieSearch/MovieSearch.tsx'

import './index.css'
import Movie from './pages/Movie/Movie.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'

import { UserProvider } from './context/user-context.tsx'
import axios from 'axios'
import { SEARCH_PREFIX } from './helpers/API.ts'
import NotFound from './pages/NotFound/NotFound.tsx'
import Error from './components/Error/Error.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<UserProvider>
				<Layout />
			</UserProvider>
		),
		children: [
			{
				index: true,
				element: <MovieSearch />,
				loader: async ({ request }) => {
					const url = new URL(request.url)
					const query = url.searchParams.get('q') || ''
					if (!query.trim()) return { movies: [], isSearchPerformed: false }

					try {
						const { data } = await axios.get(
							`${SEARCH_PREFIX}?q=${encodeURIComponent(query)}`
						)

						return {
							movies: data.description,
							isSearchPerformed: true,
						}
					} catch (error: unknown) {
						if (axios.isAxiosError(error)) {
							throw new Response(
								error.response?.data?.message ?? error.message,
								{
									status: error.response?.status || 500,
								}
							)
						}
						throw new Response('Неизвестная ошибка', { status: 500 })
					}
				},
				errorElement: <Error />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/movie/:id',
				element: <Movie />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout/Layout.tsx'
import Login from './pages/Login/Login.tsx'
import MovieSearch from './pages/MovieSearch/MovieSearch.tsx'

import './index.css'
import Movie from './pages/Movie/Movie.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'
import Error from './pages/Error/Error.tsx'
import { UserProvider } from './context/user-context.tsx'
import axios from 'axios'
import { SEARCH_PREFIX } from './helpers/API.ts'
import type { MovieProps } from './interfaces/movie.interface.ts'

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
					if (!query.trim())
						return { movies: [], error: null, isSearchPerformed: false }

					return {
						movies: axios
							.get(`${SEARCH_PREFIX}?q=${encodeURIComponent(query)}`)
							.then(({ data }) =>
								data.description.map((item: MovieProps) => ({
									id: item['#IMDB_ID'],
									title: item['#TITLE'],
									rating: item['#RANK'],
									cover: item['#IMG_POSTER'] || '',
								}))
							)
							.catch((error) => {
								return error
							}),
						error: null,
						isSearchPerformed: true,
					}
				},
				shouldRevalidate: () => true,
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
				element: <Error />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)

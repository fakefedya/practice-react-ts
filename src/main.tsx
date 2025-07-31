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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MovieSearch />,
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

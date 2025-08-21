import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import {
	createBrowserRouter,
	RouterProvider,
	type LoaderFunctionArgs,
} from 'react-router-dom'

import Layout from './layout/Layout/Layout.tsx'
import Login from './pages/Login/Login.tsx'
import MovieSearch from './pages/MovieSearch/MovieSearch.tsx'

import './index.css'
import Favorites from './pages/Favorites/Favorites.tsx'

import { UserProvider } from './context/user-context.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import NotFound from './pages/NotFound/NotFound.tsx'
import Error from './components/Error/Error.tsx'
import Loader from './components/Loader/Loader.tsx'
import { RequireAuth } from './helpers/RequireAuth.tsx'

const Movie = lazy(() => import('./pages/Movie/Movie.tsx'))

async function movieSearchLoader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url)
	const query = url.searchParams.get('q') || ''
	if (!query.trim()) return { movies: [], isSearchPerformed: false }

	try {
		const { data } = await axios.get(`${PREFIX}?q=${encodeURIComponent(query)}`)

		return {
			movies: data.description,
			isSearchPerformed: true,
		}
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			throw new Response(error.response?.data?.message ?? error.message, {
				status: error.response?.status || 500,
			})
		}
		throw new Response('Неизвестная ошибка', { status: 500 })
	}
}

async function movieLoader({ params }: LoaderFunctionArgs) {
	if (!params.id) {
		throw new Response('ID фильма не указан', { status: 400 })
	}

	try {
		const { data } = await axios.get(
			`${PREFIX}?tt=${encodeURIComponent(params.id)}`
		)
		if (!data || !data.short) {
			throw new Response('Фильм не найден', { status: 404 })
		}
		return {
			movie: data.short,
			movieId: params.id,
		}
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			throw new Response(error.response?.data?.message ?? error.message, {
				status: error.response?.status || 500,
			})
		}
		throw new Response('Неизвестная ошибка', { status: 500 })
	}
}

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
				element: (
					<RequireAuth>
						<MovieSearch />
					</RequireAuth>
				),
				loader: movieSearchLoader,
				errorElement: <Error />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/movie/:id',
				element: (
					<RequireAuth>
						<Suspense fallback={<Loader />}>
							<Movie />
						</Suspense>
					</RequireAuth>
				),
				loader: movieLoader,
				errorElement: <Error />,
			},
			{
				path: '/favorites',
				element: (
					<RequireAuth>
						<Favorites />
					</RequireAuth>
				),
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

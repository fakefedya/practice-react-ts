export interface LoaderDataProps {
	movies: Promise<
		{
			id: number
			title: string
			year: string
			rating: number
			cover: string
		}[]
	>
	error: string | null
	isSearchPerformed: boolean
}

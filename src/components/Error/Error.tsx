import { useLoaderData } from 'react-router-dom'
import Paragraph from '../Paragraph/Paragraph'
import type { LoaderDataProps } from '../../interfaces/loader.interface'

function Error() {
	const { error } = useLoaderData() as LoaderDataProps
	return (
		<section>
			<Paragraph>Ошибка: {error}</Paragraph>
		</section>
	)
}

export default Error

import { useLoaderData } from 'react-router-dom'
import type { LoaderDataProps } from '../../interfaces/loader.interface'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'

function Error() {
	const { error } = useLoaderData() as LoaderDataProps
	return (
		<section>
			<Heading>Ошибка</Heading>
			<Paragraph>{error}</Paragraph>
		</section>
	)
}

export default Error

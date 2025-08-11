import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Paragraph from '../Paragraph/Paragraph'

function Error() {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		return (
			<section>
				<Paragraph>
					Ошибка {error.status}: {error.data}
				</Paragraph>
			</section>
		)
	}

	return (
		<section>
			<Paragraph>Неизвестная ошибка</Paragraph>
		</section>
	)
}

export default Error

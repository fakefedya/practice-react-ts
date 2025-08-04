import styles from './Heading.module.css'
import type { HeadingProps } from './Heading.props'
import cn from 'classnames'

function Heading({ children, appearance = 'big' }: HeadingProps) {
	return (
		<h1 className={cn(styles['heading'], styles[appearance])}>{children}</h1>
	)
}

export default Heading

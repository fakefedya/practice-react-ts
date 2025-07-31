import styles from './Button.module.css'
import cn from 'classnames'
import type { ButtonProps } from './Button.props'

function Button({
	children,
	className,
	appearance = 'simple',
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(styles['button'], styles[appearance], className)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button

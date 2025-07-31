import { forwardRef } from 'react'
import styles from './Input.module.css'
import cn from 'classnames'
import type { InputProps } from './Input.props'

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ isValid = true, className, appearance = 'simple', ...props },
	ref
) {
	return (
		<div className={styles.wrapper}>
			{appearance === 'search' && (
				<img
					className={styles.icon}
					src='/icons/search.svg'
					alt='Иконка поиска'
				/>
			)}
			<input
				ref={ref}
				className={cn(className, styles.input, styles[appearance], {
					[styles['invalid']]: !isValid,
				})}
				{...props}
			/>
		</div>
	)
})

export default Input

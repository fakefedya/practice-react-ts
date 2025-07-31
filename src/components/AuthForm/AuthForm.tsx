import {
	useEffect,
	useReducer,
	useRef,
	type ChangeEvent,
	type FormEvent,
} from 'react'
import { formReducer, INITIAL_STATE } from './AuthForm.state'
import type { InitialStateProps } from './AuthForm.props'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './AuthForm.module.css'
import { useUser } from '../../hooks/use-user.hook'

function AuthForm() {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, values, isFormReadyToSubmit } = formState
	const nameRef = useRef<HTMLInputElement>(null)
	const { handleLogin } = useUser()

	const focusError = (isValid: InitialStateProps['isValid']) => {
		if (!isValid.name) {
			nameRef.current?.focus()
		}
	}

	useEffect(() => {
		let timerId: number
		if (!isValid.name) {
			focusError(isValid)
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
			}, 2000)
		}

		return () => {
			if (timerId) clearTimeout(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			handleLogin(values.name)
			dispatchForm({ type: 'CLEAR' })
		}
	}, [isFormReadyToSubmit, handleLogin, values.name])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: {
				[e.target.name]: e.target.value,
			},
		})
	}

	const authRequest = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatchForm({ type: 'SUBMIT' })
	}

	return (
		<form className={styles.form} onSubmit={authRequest}>
			<div className={styles.wrapper}>
				<h1 className={styles.heading}>Вход</h1>
				<Input
					type='text'
					name='name'
					value={values.name}
					ref={nameRef}
					onChange={onChange}
					appearance='simple'
					placeholder='Ваше имя'
					isValid={isValid.name}
				/>
				<Button>Войти в профиль</Button>
			</div>
		</form>
	)
}

export default AuthForm

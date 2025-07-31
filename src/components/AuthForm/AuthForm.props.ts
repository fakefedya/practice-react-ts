export interface InitialStateProps {
	isValid: {
		name: boolean
	}
	values: {
		name: string
	}
	isFormReadyToSubmit: boolean
}

export type actionProps =
	| { type: 'SET_VALUE'; payload: Partial<InitialStateProps['values']> }
	| { type: 'CLEAR' }
	| { type: 'RESET_VALIDITY' }
	| { type: 'SUBMIT' }

export type formProps = InitialStateProps

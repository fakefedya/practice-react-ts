import type {
	actionProps,
	formProps,
	InitialStateProps,
} from './AuthForm.props'

export const INITIAL_STATE: InitialStateProps = {
	isValid: {
		name: true,
	},
	values: {
		name: '',
	},
	isFormReadyToSubmit: false,
}

export function formReducer(
	state: InitialStateProps,
	action: actionProps
): formProps {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } }
		case 'CLEAR': {
			return {
				...state,
				values: INITIAL_STATE.values,
				isFormReadyToSubmit: false,
			}
		}
		case 'RESET_VALIDITY': {
			return { ...state, isValid: INITIAL_STATE.isValid }
		}
		case 'SUBMIT': {
			const nameValidity = state.values.name?.trim().length >= 2

			return {
				...state,
				isValid: {
					name: nameValidity,
				},
				isFormReadyToSubmit: nameValidity,
			}
		}
		default:
			return { ...state }
	}
}

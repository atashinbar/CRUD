import { AgendaActionsEnum, AgendaReducerStateType } from '../../Types/Types'
import { Action } from '../Actions/AgendaActions'

const initialState: AgendaReducerStateType = {
	data: [],
	isLoading: false
}

export const AgendaReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case AgendaActionsEnum.ADD_AGENDA:
			return state
		default:
			return state
	}
}

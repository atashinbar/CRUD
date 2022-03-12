import { combineReducers } from 'redux'
import { AgendaReducer } from './AgendaReducer'

export const rootReducer = combineReducers({
	agenda: AgendaReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

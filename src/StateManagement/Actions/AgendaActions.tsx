import { AgendaActionsEnum, AgendaType } from '../../Types/Types'

export type Action =
	| {
			type: AgendaActionsEnum.ADD_AGENDA
			payload: AgendaType
	  }
	| {
			type: AgendaActionsEnum.REMOVE_AGENDA
			payload: number
	  }
	| {
			type: AgendaActionsEnum.EDIT_AGENDA
			payload: AgendaType
	  }

export const addAgenda = (data: AgendaType) => ({
	type: AgendaActionsEnum.ADD_AGENDA,
	payload: data
})

export const removeAgenda = (data: number) => ({
	type: AgendaActionsEnum.REMOVE_AGENDA,
	payload: data
})
export const editAgenda = (data: AgendaType) => ({
	type: AgendaActionsEnum.EDIT_AGENDA,
	payload: data
})

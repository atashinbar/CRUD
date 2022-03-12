export interface LayoutType {
	children: React.ReactNode
}

export interface AgendaType {
	id: number
	title: string
	description: string
	status: string
	published: number
	updated: number
}

export interface AgendaReducerStateType {
	data: AgendaType[]
	isLoading: boolean
}

export enum AgendaActionsEnum {
	ADD_AGENDA = 'ADD_AGENDA',
	REMOVE_AGENDA = 'REMOVE_AGENDA',
	EDIT_AGENDA = 'EDIT_AGENDA'
}

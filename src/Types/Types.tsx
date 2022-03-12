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
	count: number
}

export enum AgendaActionsEnum {
	ADD_AGENDA = 'ADD_AGENDA',
	REMOVE_AGENDA = 'REMOVE_AGENDA',
	EDIT_AGENDA = 'EDIT_AGENDA',
	IMPORT_AGENDA = 'IMPORT_AGENDA'
}

export interface AgendaPropsType {
	data: AgendaType[]
	setVisible: any
}

export type EditAgendaPropsType = {
	data: AgendaType[]
	agendaId: number
	setVisible: any
}

import { AgendaActionsEnum, AgendaType } from "../../Types/Types";

export type Action =
  | {
      type: AgendaActionsEnum.ADD_AGENDA;
      payload: AgendaType;
    }
  | {
      type: AgendaActionsEnum.REMOVE_AGENDA;
      payload: number;
    }
  | {
      type: AgendaActionsEnum.EDIT_AGENDA;
      payload: AgendaType;
    }
  | {
      type: AgendaActionsEnum.IMPORT_AGENDA;
      payload: string;
    };

export const addAgenda = (data: AgendaType) => ({
  type: AgendaActionsEnum.ADD_AGENDA,
  payload: data
});

export const removeAgenda = (data: number) => ({
  type: AgendaActionsEnum.REMOVE_AGENDA,
  payload: data
});
export const editAgenda = (data: AgendaType) => ({
  type: AgendaActionsEnum.EDIT_AGENDA,
  payload: data
});
export const importAgenda = (data: string) => ({
  type: AgendaActionsEnum.IMPORT_AGENDA,
  payload: data
});

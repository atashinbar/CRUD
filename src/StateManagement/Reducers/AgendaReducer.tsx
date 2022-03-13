import { AgendaActionsEnum, AgendaReducerStateType } from "../../Types/Types";
import { Action } from "../Actions/AgendaActions";

const initialState: AgendaReducerStateType = {
  data: [],
  count: 0
};

export const AgendaReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AgendaActionsEnum.ADD_AGENDA:
      const newObject1 = action.payload;
      newObject1.id = state.count + 1;
      return {
        ...state,
        data: [...state.data, newObject1],
        count: state.count + 1
      };
    case AgendaActionsEnum.REMOVE_AGENDA:
      const newObject2 = state.data.filter((el) => el.id !== action.payload);
      return { ...state, data: newObject2 };
    case AgendaActionsEnum.EDIT_AGENDA:
      const newObject3 = [...state.data];
      const index = newObject3.findIndex((el) => el.id === action.payload.id);
      newObject3[index] = action.payload;
      return { ...state, data: newObject3 };
    case AgendaActionsEnum.IMPORT_AGENDA:
      const newObject4 = JSON.parse(action.payload);
      return { ...state, data: newObject4 };
    default:
      return state;
  }
};

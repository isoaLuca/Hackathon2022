import { Reducer } from "redux";
import { ModalAction, ModalActionType } from "./action";
import { initialState, ModalState } from "./type";

export const modalStateReducer: Reducer<ModalState, ModalAction> = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionType.OPEN:
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
    case ModalActionType.CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
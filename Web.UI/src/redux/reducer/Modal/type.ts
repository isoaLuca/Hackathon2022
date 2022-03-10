import { InputTypes } from "../../../types/Inputs";

export interface ModalState {
    title: string,
    content: InputTypes[],
    isBig?: boolean,
    isOpen: boolean,
}

export const initialState: ModalState = {
    title: '',
    content: [],
    isBig: false,
    isOpen: false,
};
import { InputTypes } from "../../../types/Inputs";

export const ModalActionType = {
    OPEN: "OPEN",
    CLOSE: "CLOSE",
};

interface ModalOpenType {
    type: typeof ModalActionType.OPEN;
    payload?: {
        title: string;
        content: InputTypes[];
        onClose?: () => void;
        isBig?: boolean;
        onOpen?: () => void;
        isOpen: boolean;
    };
}

interface ModalCloseType {
    type: typeof ModalActionType.CLOSE;
    payload: undefined
}

export const openModal = (modalProps: any) => ({
    type: ModalActionType.OPEN,
    payload: {
        modalProps,
    }
})

export const closeModal = () => ({
    type: ModalActionType.CLOSE,
})

export type ModalAction = ModalOpenType | ModalCloseType;
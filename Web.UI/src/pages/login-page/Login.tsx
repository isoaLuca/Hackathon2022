import { t } from "i18next"
import { useDispatch } from "react-redux"
import { Modal } from "../../components/modal/Modal"
import { ModalActionType } from "../../redux/reducer/Modal/action"
import { InputTypes } from "../../types/Inputs"

export const Login = () => {

    const dispatch = useDispatch()

    const inputsLogin: InputTypes[] = [
        {
            name: "email",
            type: "text",
            label: "Email",
            placeholder: "Email",
        }, {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
        },
    ]

    const openModal = () => {
        dispatch({
            type: ModalActionType.OPEN,
            payload: {
                title: t("login"),
                content: inputsLogin,
            }
        })
    }

    return (
        <>
            <div className="flex h-screen w-full justify-center items-center">
                <Modal />
                <button className="bg-blue-500 w-20 h-12" onClick={() => openModal()}>Login</button>
            </div>
        </>
    )
}
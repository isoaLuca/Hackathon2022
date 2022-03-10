import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalActionType } from "../../redux/reducer/Modal/action"
import { Form } from "../form/Form"
import './index.scss'

export const Modal = () => {

    const dispatch = useDispatch()

    const modalState = useSelector((state: any) => state.modal)

    const handleClose = () => {
        dispatch({
            type: ModalActionType.CLOSE,
        })
    }

    const clickAway = (e: any) => {
        if (e.target.className === 'modal-container') {
            handleClose()
        }
    }

    return (
        <div className={`modal ${modalState.isOpen ? "is-active px-5 shadow-xl" : "hidden"} ${modalState.isBig ? "is-big" : ""} `}>
            <div className="modal-card flex flex-col items-center justify-center h-full w-full">
                <header className="modal-card-head flex justify-between w-full h-1/6 items-start">
                    <p className="modal-card-title font-bold text-2xl w-2/4 flex justify-end">{modalState.title}</p>
                    <button className="delete w-1/6 font-bold text-2xl" aria-label="close" onClick={handleClose}>X</button>
                </header>
                <section className="modal-card-body w-full h-2/3">
                    <Form inputs={modalState.content} noLabel onSubmit={(e: any) => console.log(e.email, e.password)} submitLabel={modalState.title}/>
                </section>
            </div>
        </div>
    )
}
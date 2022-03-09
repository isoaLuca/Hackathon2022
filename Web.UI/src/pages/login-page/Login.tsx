import { t } from "i18next"
import { Form } from "../../components/form/Form"
import { InputTypes } from "../../types/Inputs"

export const Login = () => {

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

    return (
        <>
            <div className="flex h-screen w-full justify-center items-center rounded">
                <div className="flex h-3/6 w-3/6 shadow-lg rounded-xl">
                    <Form 
                        submitLabel="Login"
                        inputs={inputsLogin}
                        defaultValues={inputsLogin}
                        className="bg-white"
                        onSubmit={(list: any) => console.log(list.email, list.password)}
                        noLabel
                        titleForm={t('login')}
                    /> 
                </div>
            </div>
        </>
    )
}
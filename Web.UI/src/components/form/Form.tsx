import React from "react"
import { InputTypes } from "../../types/Inputs"
import './index.scss'

interface IForm {
	submitLabel?: string
	inputs: InputTypes[]
	className?: string
	defaultValues?: any
	hide?: boolean
	onSubmit?: (data: any) => void
	noLabel?: boolean
	titleForm?: string
}

export const Form = ({
	submitLabel,
	inputs,
	className = '',
	defaultValues = {},
	hide,
	noLabel,
	onSubmit,
	titleForm
}: IForm) => {

	const [data, setData] = React.useState(defaultValues)

	const handleChange = (event: any) => {
		const { name, value } = event.target
		setData({
			...data,
			[name]: value
		})
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()
		onSubmit && onSubmit(data)
	}

	return (
		<>
			<form className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="font-bold text-2xl mt-10">{titleForm}</h1>
				<div className="h-3/4 w-full flex flex-col items-center justify-center">
					{inputs.map((input: any) => {
						return (
							<div className="flex flex-col h-10 w-3/4 mb-5" key={input.name}>
								<label htmlFor={input.name}>{!noLabel ? input.label : ''}</label>
								<input
									type={input.type}
									name={input.name}
									placeholder={!hide ? input.placeholder : ''}
									disabled={input.disabled}
									autoComplete={input.autocomplete}
									defaultValue={defaultValues[input.name]}
									className='h-5 py-5 w-full'
									hidden={hide}
									onChange={handleChange}
								/>
							</div>
						)
					})}
				</div>
				<div className="h-1/4 w-full items-center justify-center flex">
					<input type="button"
						className="w-24 h-12 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold p-2"
						value={submitLabel}
						onClick={(e: any) => handleSubmit(e)}
					/>
				</div>
			</form>
		</>
	)
}
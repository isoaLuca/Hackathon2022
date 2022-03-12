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
	contact?: boolean
}

export const Form = ({
	submitLabel,
	inputs,
	className = '',
	defaultValues = {},
	hide,
	noLabel,
	onSubmit,
	titleForm,
	contact
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
				<div className={`${!contact ? 'h-3/4 w-full flex flex-col items-center justify-center': 'h-5/6 grid grid-cols-2 gap-2'}`}>
					{inputs.map((input: any) => {
						return (
							!contact ? (
								<div className="flex flex-col h-10 w-3/4 mb-5" key={input.name}>
									<label htmlFor={input.name}>{!noLabel ? input.label : ''}</label>
									<input
										type={input.type}
										name={input.name}
										placeholder={!hide ? input.placeholder : ''}
										disabled={input.disabled}
										autoComplete={input.autocomplete}
										defaultValue={defaultValues[input.name]}
										className='h-5 py-5 w-full border-b rounded-md px-3'
										hidden={hide}
										onChange={handleChange}
									/>
								</div>
							) : (
								<div className="flex flex-col h-10 w-52" key={input.name}>
									<div className="flex items-start flex-col">
										<label className="mb-1 text-baseColor-300" htmlFor={input.name}>{!noLabel ? input.label : ''}</label>
										<input
											type={input.type}
											name={input.name}
											placeholder={!hide ? input.placeholder : ''}
											disabled={input.disabled}
											autoComplete={input.autocomplete}
											defaultValue={defaultValues[input.name]}
											className='h-5 py-5 rounded-md w-full border border-baseColor-300 focus:border-baseColor-100 px-3'
											hidden={hide}
											onChange={handleChange}
										/>
									</div>
								</div>
							)
							
						)
					})}
				</div>
				<div className={`${!contact ? 'w-full h-1/4 items-center justify-center' : 'w-3/6 -translate-x-5 items-start justify-start'} flex`}>
					<input type="button"
						className={`w-24 h-10 cursor-pointer rounded-2xl bg-baseColor-100 hover:bg-blue-500 text-white text-sm font-bold p-2`}
						value={submitLabel}
						onClick={(e: any) => handleSubmit(e)}
					/>
				</div>
			</form>
		</>
	)
}
import { InputTypes } from "../../../types/Inputs"

export const Input = (props: InputTypes) => {
    const {
        name, 
        type,
        label,
        placeholder,
        disabled,
        autocomplete,
        noLabel,
    } = props

    switch (type) {
        case 'text':
            return (
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input type={type} />
                </div>
            )
        case 'select':
            return (
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <select>
                        {autocomplete && autocomplete.map((item: any) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>

            )
        case 'password':
            return (
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input type={type} />
                </div>
            )

    }
}

import React from "react"
import classnames from "classnames"

const FormInput = ({
	label,
	name,
	id,
	placeholder,
	value,
	error,
	info,
	type,
	onChange,
	disabled
}) => {
	return (
		<div>
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<input
				type={type}
				id={id}
				className={classnames("form-input", {
					"is-invalid": error
				})}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
			{info && <small className="form-text">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
			<br />
		</div>
	)
}

export default FormInput

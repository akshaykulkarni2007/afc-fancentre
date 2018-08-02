import React from "react"
import classnames from "classnames"

const FormSelect = ({
	label,
	name,
	id,
	options,
	error,
	info,
	onChange,
	disabled
}) => {
	return (
		<div>
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<select
				id={id}
				className={classnames("form-input", {
					"is-invalid": error
				})}
				name={name}
				onChange={onChange}
				disabled={disabled}>
				{options.map(option => (
					<option value={option.value}>{option.text}</option>
				))}
			</select>
			{info && <small className="form-text">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
			<br />
		</div>
	)
}

export default FormSelect

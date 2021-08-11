import React from 'react';

const CurrencyItemFrom = (props) => {
	const {type, from, setFrom} = props;

	const lowerType = type.toLowerCase();

	return (
		<div className="calculator__currency-item">
			<input
				id={`currency-type-` + lowerType + `-1`}
				className="calculator__currency-input visually-hidden"
				type="radio"
				name="currency-type"
				value={type}
				onChange={(evt) => {
					setFrom({
						...from,
						currency: evt.target.value
					})
				}}
			/>
			<label className="calculator__currency-label" htmlFor={`currency-type-` + lowerType + `-1`} data-type={type}>{type}</label>
		</div>
	);
}

export default CurrencyItemFrom;

import React from 'react';

const CurrencyItemTo = (props) => {
	const {type, to, setTo, active, setActive} = props;

	const lowerType = type.toLowerCase();

	return (
		<div className="calculator__currency-item">
			<input
				id={`currency-type-` + lowerType + `-2`}
				className="calculator__currency-input visually-hidden"
				type="radio"
				name="currency-type"
				value={type}
				onChange={(evt) => {
					setTo({
						...to,
						currency: evt.target.value
					});
					setActive({
						...active,
						value: 'from'
					});
					document.querySelector('.calculator__currency-toggle--to').checked = false;
				}}
			/>
			<label className="calculator__currency-label" htmlFor={`currency-type-` + lowerType + `-2`} data-type={type}>{type}</label>
		</div>
	);
}

export default CurrencyItemTo;

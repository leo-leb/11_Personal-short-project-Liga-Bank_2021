import React from 'react';

const CurrencyItemFrom = (props) => {
	const {type, from, setFrom, active, setActive} = props;

	const lowerType = type.toLowerCase();

	return (
		<div
			className="calculator__currency-item"
			// onClick={(evt) => {
			// 		console.log(evt.target);
			// }}
		>
			<input
				id={`currency-type-` + lowerType + `-1`}
				className="calculator__currency-input visually-hidden"
				type="radio"
				name="currency-type"
				value={type}
				// onClick={(evt) => {
				// 	console.log(evt.target);
				// }}
				onChange={(evt) => {
					setActive({
						...active,
						value: 'to'
					})
					setFrom({
						...from,
						currency: evt.target.value
					});
					document.querySelector('.calculator__currency-toggle--from').checked = false;
				}}
			/>
			<label
				className="calculator__currency-label"
				htmlFor={`currency-type-` + lowerType + `-1`}
				data-type={type}
				// onClick={(evt) => {
				// 	console.log(evt.target);
				// }}
			>{type}</label>
		</div>
	);
}

export default CurrencyItemFrom;

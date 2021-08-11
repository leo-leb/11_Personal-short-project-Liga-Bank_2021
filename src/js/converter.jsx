import React, {useState, useEffect} from 'react';
import History from './history.jsx';
import PropTypes from 'prop-types';
import CurrencyItemFrom from './currency-item-from.jsx';
import CurrencyItemTo from './currency-item-to.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from './store/action';
import {Currencys} from './consts';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';

const nowDate = new Date();
const exchangeUrl = 'https://api.frankfurter.app';

async function getCurrency(url, date, amount, from, to) {
  const response = await fetch(`${url}/${dayjs(date).format('YYYY-MM-DD')}?amount=${amount}&from=${from}&to=${to}`);
  const data = await response.json();
	return Object.values(data.rates)[0];
}

const Converter = (props) => {
	const {operations, onOperationAdd} = props;

	const [date, setDate] = useState(new Date());
	const [minDate, setMinDate] = useState(dayjs().subtract(7, 'day'));

	const [from, setFrom] = useState({
		value: 0,
		currency: 'USD',
	});

	const [to, setTo] = useState({
		value: 0,
		currency: 'RUB',
	});

	useEffect(() => {
		if (from.currency === to.currency) {
			setTo({
				value: from.value,
				currency: to.currency
			})
		} else {
			getCurrency(exchangeUrl, date, from.value, from.currency, to.currency)
			.then(res => setTo({
				value: res,
				currency: to.currency
			}))
		}
	}, [from.value, from.currency, date]);

	return (
		<section className="converter">
			<h1 className="converter__title">Конвертер валют</h1>
			<form className="calculator converter__calculator" action="#" method="post">
				<div className="calculator__row">
					<div className="calculator__value">
						<h3 className="calculator__title">У меня есть</h3>
						<input
							type="text"
							className="calculator__amount"
							value={from.value}
							onChange={(evt) => {
								setFrom({
									...from,
									value: evt.target.value
								});
							}}
						/>
						<label htmlFor="calculator__currency-toggle--from" className="calculator__currency">
							<span className="calculator__currency-type">{from.currency}</span>
						</label>
						<input
								type="checkbox"
								className="calculator__currency-toggle--from visually-hidden"
								id="calculator__currency-toggle--from"
						/>
						<div className="calculator__currency-list calculator__currency-list--from">
							<fieldset className="calculator__currency-group">
								<legend className="visually-hidden">Currency type</legend>
								{Currencys.map((item, i) => <CurrencyItemFrom type={item} from={from} setFrom={setFrom} key={item + i} />)}
							</fieldset>
						</div>
					</div>
					<div className="calculator__value">
						<h3 className="calculator__title">Хочу приобрести</h3>
						<input
							type="text"
							className="calculator__amount"
							value={to.value}
							onChange={(evt) => {
								setTo({
									...to,
									value: evt.target.value
								});
							}}
						/>
						<label htmlFor="calculator__currency-toggle--to" className="calculator__currency">
							<span className="calculator__currency-type">{to.currency}</span>
						</label>
						<input
								type="checkbox"
								className="calculator__currency-toggle--to visually-hidden"
								id="calculator__currency-toggle--to"
						/>
						<div className="calculator__currency-list calculator__currency-list--to">
							<fieldset className="calculator__currency-group">
								<legend className="visually-hidden">Currency type</legend>
								{Currencys.map((item, i) => <CurrencyItemTo type={item} to={to} setTo={setTo} key={item + i} />)}
							</fieldset>
						</div>
					</div>
				</div>
				<div className="calculator__row">
					<label className="calculator__calendar" htmlFor="calculator__calendar-toggle" onClick={() => console.log(nowDate)}>
						<p className="calculator__calendar-date">{date.toLocaleDateString()}</p>
					</label>
					<input
							type="checkbox"
							className="calculator__calendar-toggle visually-hidden"
							id="calculator__calendar-toggle"

					/>
					<Calendar
						minDate={minDate.toDate()}
						maxDate={nowDate}
						onChange={setDate}
						value={date}
					/>
					<button
						className="calculator__btn"
						type="submit"
						onClick={(evt) => {
							evt.preventDefault();
							onOperationAdd({
								date: dayjs(date).format('DD.MM.YYYY'),
								from: from,
								to: to,
							});
							console.log(operations);
						}}
					>Сохранить результат</button>
				</div>
			</form>
			<div className="history">
				<h2 className="history__title">История конвертация</h2>
				<History />
				<button className="history__btn">Очистить историю</button>
			</div>
		</section>
	);
}

const mapStateToProps = (state) => ({
	operations: state.operations
});

const mapDispatchToProps = (dispatch) => ({
	onOperationAdd(newOperation) {
		dispatch(ActionCreator.updateOperations(newOperation));
	},
});

Converter.propTypes = {
	operations: PropTypes.array.isRequired,
	onOperationAdd: PropTypes.func.isRequired,
};

export {Converter};
export default connect(mapStateToProps, mapDispatchToProps)(Converter);

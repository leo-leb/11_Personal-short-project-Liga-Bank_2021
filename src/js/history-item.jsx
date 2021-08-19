import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const HistoryItem = (props) => {
	const {item} = props;
	const {date, from, to} = item;

	return (
		<li className="history__item">
			<p className="history__item-date">{date}</p>
			<p className="history__item-from">{from.value} {from.currency}</p>
			<p className="history__item-to">{to.value} {to.currency}</p>
		</li>
	);
}

HistoryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HistoryItem;

import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HistoryItem from './history-item.jsx';
// import {connect} from 'react-redux';

const History = (props) => {
	const {operations} = props;

	// useEffect(() => {
	// 	console.log(operations);
	// }, [props]);

	if (operations.length !== 0) {
		return (
			<ul className="history__list">
				{operations.map((item, i) => <HistoryItem item={item} key={item + i} />)}
			</ul>
		);
	} else {
		return null;
	}
}

// const mapStateToProps = (state) => ({
// 	operations: state.operations
// });

History.propTypes = {
  operations: PropTypes.array.isRequired,
};

// export {History};
// export default connect(mapStateToProps, null)(History);

export default History;

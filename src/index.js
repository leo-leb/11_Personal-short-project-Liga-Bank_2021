import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './js/app.jsx';
// import Operations from './js/mocks/operations.js';
import {reducer} from './js/store/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
	reducer,
	composeWithDevTools()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector(`#root`)
);

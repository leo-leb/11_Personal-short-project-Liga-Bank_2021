import React from 'react';
import ConverterScreen from './converter-screen.jsx';
import MainScreen from './fake-pages/main-screen.jsx';
import CreditScreen from './fake-pages/credit-screen.jsx';
import ContactsScreen from './fake-pages/contacts-screen.jsx';
import QuestionsScreen from './fake-pages/questions-screen.jsx';
import NotFoundScreen from './not-found-screen/not-found-screen.jsx';
// import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Routes} from './consts';

const App = () => {
	// const {history} = props;

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={Routes.MAIN}>
					<MainScreen />
				</Route>
				<Route exact path={Routes.CREDIT}>
					<CreditScreen />
				</Route>
				{/* <Route exact path={Routes.CONVERTER}>
					<ConverterScreen
						history={history}
						currencyList={currencyList}
					/>
				</Route> */}
				<Route exact path={Routes.CONVERTER}>
					<ConverterScreen />
				</Route>
				<Route exact path={Routes.CONTACTS}>
					<ContactsScreen />
				</Route>
				<Route exact path={Routes.QUESTIONS}>
					<QuestionsScreen />
				</Route>
				<Route>
					<NotFoundScreen />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

// App.propTypes = {
//   history: PropTypes.array.isRequired,
// };

export default App;

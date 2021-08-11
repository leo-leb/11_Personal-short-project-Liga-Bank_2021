import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../consts.js';

const MainScreen = () => {
	return (
		<div>
			<section className="fake-screen">
				<h1 className="fake-screen__title">Эта страница находится в разработке.</h1>
				<Link className="fake-screen__link" to={Routes.CONVERTER}>Вернуться на страницу конвертации валют...</Link>
			</section>
		</div>
	);
};

export default MainScreen;

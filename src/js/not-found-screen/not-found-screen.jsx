import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../consts.js';

const NotFoundScreen = () => {
  return (
    <div>
      <section className="not-found-screen">
        <h1 className="not-found-screen__title">404. Страница не найдена</h1>
				<Link className="not-found-screen__link" to={Routes.CONVERTER}>Вернуться на страницу конвертации валют...</Link>
      </section>
    </div>
  );
};

export default NotFoundScreen;

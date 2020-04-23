import '@babel/polyfill';
import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router';
import '../src/api/interceptors';
import store, { history } from './store';
import './styles/styles.scss';
import Loading from './components/loading';

const Login = lazy(() => import('./components/login/index'));

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/login" render={props => <Login {...props} />} />
					<Redirect from="/*" to="/login" />
				</Switch>
			</Suspense>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

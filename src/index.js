import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

const store = configStore();

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

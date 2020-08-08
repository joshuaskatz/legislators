import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import App from './components/App';

const store = configStore();

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

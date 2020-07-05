import React from 'react';
import Header from './Header';
import Legislators from './Legislators';
import Mapbox from './Mapbox';
import '../styles/sass/styles.scss';

const App = () => (
	<div>
		<Header />
		<Legislators />
		<Mapbox />
	</div>
);

export default App;

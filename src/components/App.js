import React from 'react';
import Header from './Header';
import Legislators from './Legislators';
import Mapbox from './Mapbox';
import '../styles/sass/styles.scss';

const App = () => (
	<div>
		<div className="header">
			<Header />
		</div>

		<Legislators />
		<div className="mapbox-container">
			<Mapbox />
		</div>
	</div>
);

export default App;

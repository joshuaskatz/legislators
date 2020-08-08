import React from 'react';

const Header = () => (
	<div>
		<h1 className="header-primary">Find your state representatives</h1>
		<h5 className="header-secondary">
			Click the{' '}
			<span>
				<i className="fas fa-crosshairs" />
			</span>{' '}
			icon on the map, or search to find and select your current location.
		</h5>
	</div>
);

export default Header;

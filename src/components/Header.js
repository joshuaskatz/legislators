import React from 'react';

const Header = () => (
	<div>
		<header className="header">
			<div className="text-box">
				<h1 className="header-primary">
					Find your state representatives
				</h1>
				<h5 className="header-secondary">
					Click the{' '}
					<span>
						<i className="fas fa-crosshairs" />
					</span>{' '}
					icon on the map to find and select your current location.
				</h5>
			</div>
		</header>
	</div>
);

export default Header;

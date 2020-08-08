import React from 'react';
import { connect } from 'react-redux';

const Legislators = ({ legislators }) => (
	<div className=" legislator-container">
		{legislators.map((legislator) => {
			return (
				<div key={legislator.name} className="border">
					<h1>{legislator.name}</h1>
					<h2>{legislator.chamber[0].post.division.name}</h2>
					<h3>{legislator.party[0].organization.name} Party</h3>
					{legislator.contactDetails.map((details) => {
						if (details.type === 'voice') {
							return (
								<div key={Math.random()}>
									<hr />
									<p>
										<strong>
											Phone number for {details.note}
										</strong>
									</p>

									<p>{details.value}</p>
								</div>
							);
						} else if (details.type === 'address') {
							return (
								<div key={Math.random()}>
									<hr />
									<p>
										<strong>
											Address for {details.note}
										</strong>
									</p>

									<p>{details.value.replace(';', ', ')}</p>
								</div>
							);
						} else if (details.type === 'email') {
							return (
								<div key={Math.random()}>
									<hr />
									<p>
										<strong>
											Email for {details.note}
										</strong>
									</p>

									<p>{details.value}</p>
								</div>
							);
						}
					})}
					<a href={legislator.links[0].url} className="btn btn-blue">
						Biography
					</a>
				</div>
			);
		})}
	</div>
);

const mapStateToProps = (state) => ({
	legislators: state.legislators
});

export default connect(mapStateToProps)(Legislators);

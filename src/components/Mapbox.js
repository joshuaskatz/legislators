import React from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { GraphQLClient } from 'graphql-request';
import { addLegislators, removeLegislators } from '../actions/legislators';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Mapbox extends React.Component {
	state = {
		lng: -98,
		lat: 39,
		zoom: 4
	};

	componentDidMount() {
		const OPEN_STATES_API_KEY = process.env.REACT_APP_OPEN_STATES_KEY;

		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [ this.state.lng, this.state.lat ],
			zoom: this.state.zoom
		});

		map.addControl(
			new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl
			})
		);

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			})
		);

		map.addControl(new mapboxgl.NavigationControl());

		map.on('click', (e) => {
			document.documentElement.scrollTop = 0;

			const { lat, lng } = e.lngLat.wrap();

			const main = async () => {
				const endpoint = 'https://openstates.org/graphql';

				const graphQLClient = new GraphQLClient(endpoint, {
					headers: {
						'X-API-Key': OPEN_STATES_API_KEY
					}
				});

				const query = `{
					people(latitude: ${lat}, longitude: ${lng}, first: 100) {
					  	edges {
							node {
								name
								image
								links {
								url
								}
								contactDetails {
									type
									value
									note
								}
								party: currentMemberships(classification:"party") {
									organization {
										name
									}
								}
								chamber: currentMemberships(classification:["upper", "lower"]) {
									post {
										division {
											name
										}
									}
								}
							}
					  	}
					}
				}`;

				const data = await graphQLClient.request(query);

				return JSON.parse(JSON.stringify(data));
			};

			main()
				.then(({ people }) => {
					let arrayData = [];
					people.edges.map(({ node }) => {
						arrayData.push(node);
					});
					return arrayData;
				})
				.then((data) => {
					this.props.removeLegislators();
					this.props.addLegislators(data);
					console.log(this.props.legislators);
				})
				.catch((err) => console.log(err));
		});
	}

	render() {
		return (
			<div>
				<div
					id="map-container"
					ref={(el) => (this.mapContainer = el)}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	addLegislators: (legislators) => dispatch(addLegislators(legislators)),
	removeLegislators: () => dispatch(removeLegislators())
});

const mapStateToProps = (state) => ({
	legislators: state.legislators
});

export default connect(mapStateToProps, mapDispatchToProps)(Mapbox);

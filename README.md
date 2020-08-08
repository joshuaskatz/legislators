This was the first app I made via ReactJS.

This is a single page app that uses mapbox and its built in geolocator to get a users coordinates when they click a particular point on the map. Unfortunately due to constraints of mapbox and the accuracy of the geolocation/onclick functionality, the must be at least zoomed in to the general vicinity of their neighborhood/city - if it's a smaller city - for the onclick to accurately register.

Once the geolocation/onclick funtionality registers a users coordinates, a query to the OpenStates GraphQL API is fetched. This query fetches the state legislators of the coordinates passed in via mapbox. The info provided, includes contact, their state biography, and a photo - if available

The goal of this project, from an educational standpoint, was to understand fetching from API's and to get more practice with lifecycle methods within React class components. This project opened me up to the wonderful world of GraphQL, and also allowed me to provide an app that serves a purpose to people who are interested in learning more about their state representatives.
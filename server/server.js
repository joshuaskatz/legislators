const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));
app.use(express.static('build'));

app.get('/', (req, res, next) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log('Server is up!');
});
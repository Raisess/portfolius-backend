const express = require('express');
const cors = require('cors');
const firebase = require('firebase');
const app = express();
// server config
const { port } = require('./config');
// fb init
const config = require('./firebase/firebase.json');
firebase.initializeApp(config);

// api routes
const user = require('./routes/user.route');
const project = require('./routes/project.route');

// api dependecies use
app.use(cors());
app.use(express.json());

// root route
app.get('/api', (req, res) => res.json({
  log: 'api is on!'
}));

// user routes
app.use('/user', user);
// project routes
app.use('/project', project);

app.listen(port, () => console.log('running in port:', port));
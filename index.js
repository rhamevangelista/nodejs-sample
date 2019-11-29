const express = require('express');
const people = require('./data/profiles.json');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Summit People',
    people: people.profiles
  });
});

app.listen(7000);
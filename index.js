const express = require('express');
const people = require('./data/profiles.json');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.route('/profile/:id').get(function(req, res){
	const person = people.profiles.find(p => p.id === parseInt(req.params.id));
	res.render('profile', {
		title: `About ${person.name}`,
		person,
	});
})

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Summit People',
		people: people.profiles
	});
});

app.listen(7000);
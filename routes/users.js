var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('lists all users');

  users.push ({name: 'Pedro Emerick'});
  users.push ({name: 'Samuel Mizhary'});
  users.push ({name: 'Steve Jobs'});
  users.push ({name: 'Bill Gates'});
  users.push ({name: 'Fernando Pessoa'});

  res.render('userlist', {users: users});
});

router.post('/addNames', function(req, res) {
  var nome = req.body.name;
  // console.log(nome);
  users.push({name: nome});

  res.render('userlist', {users: users});
});

router.post('/rmNames', function(req, res) {
  var nome = req.body.name;
  // console.log(nome);
  
  // var indice = users.indexOf({name: nome});

  var indice = -1;
  users.forEach(function (user) {
    if (user.name == nome) {
      indice = users.indexOf(user);
    }
  });

  // console.log(indice);

  users.splice(indice, 1);

  res.render('userlist', {users: users})
});

module.exports = router;

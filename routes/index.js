const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new message's form */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST new message's form */
router.post('/new', function(req, res, next) {
  if (req.body.messageUser && req.body.messageText) {
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect('/');
  } else {
    next();
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
router.use(express.json());
const sendMail = require('./mail');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/rooms', function (req, res, next) {
  res.render('rooms');
});
router.get('/features', function (req, res, next) {
  res.render('features');
});
router.get('/about', function (req, res, next) {
  res.render('about');
});
router.get('/gallery', function (req, res, next) {
  res.render('gallery');
});
router.get('/contact', function (req, res, next) {
  res.render('contact');
});
router.get('/moksha', function (req, res, next) {
  res.render('moksha');
});
router.post('/email', (req, res) => {
  const { subject, email, text, number } = req.body;
  console.log('Data: ', req.body);

  sendMail(email, subject, text, number, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Email sent!' });
    }
  });
});
module.exports = router;

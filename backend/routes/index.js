var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/getZip', function (req, res) {
  Address.getZip(req.body, res);
});

router.post('/getAddress', function (req, res) {
  Address.getAddress(req.body, res);
});

router.get('/countries', function (req, res) {
  Address.getCountries(res);
});

router.get('/states', function (req, res) {
  Address.getStatesByCountry(req.query, res);
});

router.get('/cities', function (req, res) {
  Address.getCitiesByState(req.query, res);
});
module.exports = router;
var express = require('express');
var router = express.Router();

let value = 1;
let total = 11;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;
  total += value;
  res.send(`The total value is: ${total}`);
});

module.exports = router;

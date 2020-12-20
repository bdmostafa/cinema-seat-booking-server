var express = require('express');
var router = express.Router();

/* GET seats listing. */
router.get('/', function(req, res, next) {
  res.send('all seats here');
});

module.exports = router;

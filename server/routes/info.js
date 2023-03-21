const express = require('express');
const router = express.Router();

const pkj = require('../package.json')

/**
 * req - request object
 * res - response object
 * 
 * Return service info response.
 */
router.get('/', function(req, res) {
  res.status(200).send({
    service_name: pkj.name,
    service_version: pkj.version
  });
});

module.exports = router;

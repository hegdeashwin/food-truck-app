const express = require('express')
const router = express.Router()

/**
 * req - request object
 * res - response object
 *
 * Return acknowledge response.
 * Use for health check of the service
 */
router.get('/', function (req, res) {
  res.send({
    acknowledge: true,
  })
})

module.exports = router

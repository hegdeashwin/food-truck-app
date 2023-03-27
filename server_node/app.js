const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const compression = require('compression')

const healthRouter = require('./routes/health')
const infoRouter = require('./routes/info')
const foodTrucksRouter = require('./routes/foodTrucks')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json()) // parse application/json
// app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cookieParser())
app.use(compression())

app.use('/api/v1/info', infoRouter)
app.use('/api/v1/health', healthRouter)
app.use('/api/v1/foodtrucks', foodTrucksRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send('error')
})

module.exports = app

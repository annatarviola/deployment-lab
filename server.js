const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '5679fba82917463e935f8d048006e9cf',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.listen(4000, () => {
    console.log('server running on port 4000')
})
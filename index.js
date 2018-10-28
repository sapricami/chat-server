const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'+ port))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var api_auth = require('./api/auth')

app.use('/auth', api_auth)
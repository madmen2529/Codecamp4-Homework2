const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./route/apiRoute')

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', apiRoute)

app.listen(3000)
var apiModel = require('../model/apiModel')

// var request = require('request')
var axios = require('axios')
var url = 'https://reqres.in/api/users/2'
var authorize = { Authorization: 'Bearer someToken' }

module.exports.sendAPI = async function(req, res) {
    var ret = await axios.get(url, {
        header: authorize
    })

    res.status(200).send(ret.data)
}
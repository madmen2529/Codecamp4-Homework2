const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tigersut',
    database: 'boatrental',
})

db.connect()

app.get('/boats', (req, res) => {
    let query = 'SELECT * FROM boats'
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addboat', (req, res) => {
    let query = `INSERT INTO boats(bid,bname,color)
    values (${req.query.bid},"${req.query.bname}","${req.query.color}")`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Success")
        }
    })
})

app.get('/deleteboatbyid', (req, res) => {
    let query = `DELETE FROM boats WHERE bid =${req.query.deleteboatid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send(`deleted boat id : ${req.query.deleteboatid} already.`)
        }
    })
})

app.get('/updateboat', (req, res) => {
    let query = `UPDATE boats SET bname = "${req.query.bname}" , color = "${req.query.color}" WHERE bid = ${req.query.bid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Update Success")
        }
    })
})

app.get('/sailors', (req, res) => {
    let query = 'SELECT * FROM sailors'
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addsailors', (req, res) => {
    let query = `INSERT INTO sailors(sid,sname,rating,age)
    values (${req.query.sid},"${req.query.sname}",${req.query.rating},"${req.query.age}")`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Success")
        }
    })
})

app.get('/deletesailorsbyid', (req, res) => {
    let query = `DELETE FROM sailors WHERE sid =${req.query.deletesid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send(`deleted sailors id : ${req.query.deletesid} already.`)
        }
    })
})

app.get('/updatesailors', (req, res) => {
    let query = `UPDATE sailors SET sname = "${req.query.sname}" , rating = ${req.query.rating},age = ${req.query.age}  WHERE sid = ${req.query.sid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Update Success")
        }
    })
})

app.get('/reserves', (req, res) => {
    let query = 'SELECT * FROM reserves'
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addreserves', (req, res) => {
    let query = `INSERT INTO reserves(sid,bid,day)
    values (${req.query.sid},${req.query.bid},"${req.query.day}")`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Success")
        }
    })
})

app.get('/deletereservebyid', (req, res) => {
    let query = `DELETE FROM reserves WHERE sid =${req.query.sid} and bid=${req.query.bid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send(`deleted sailors id : ${req.query.sid} and boats id : ${req.query.bid} already.`)
        }
    })
})

app.get('/updatereserve', (req, res) => {
    let query = `UPDATE reserves SET day = "${req.query.day}"  WHERE sid = ${req.query.sid} and bid = ${req.query.bid} `
    db.query(query, (err, results) => {
        if (err) {
            console.log(err)
            console.log("Something Wrong!")
        } else {
            res.send("Update Success")
        }
    })
})

app.listen(3001, () => {
    console.log("Start server at port 3001")
})
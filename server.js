const express = require("express");
const app = express()
const budget = require('./models/budget.js')


//index
app.get('/budgets', (req, res) => {
    res.send('Hello')
})

//show   GET  /budgets/:index
app.get('/budgets/:index', (req, res) => {
    res.send('Hello again')
})

//new    GET /budgets/new
app.get('/budgets/new', (req, res) => {
    res.send('Hello a third time')
})
//create  POST /budgets
app.post('/orders', (req, res) => {
    res.send('something something post')
})

app.listen(3000, () => {
    console.log("working")
})
const express = require("express");
const app = express()
const budget = require('./models/budget.js')
const bodyParser = require("body-parser");


app.use(express.static('./public/'));
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({ extended: false}))

//index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudget: budget})
})

//new    GET /budgets/new
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs', {budget: budget})
})

//show   GET  /budgets/:index
app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {allBudget: budget[req.params.id]})
})



//create  POST /budgets
app.post('/budgets', (req, res) => {
    budget.push(req.body);
    res.redirect("/budgets")
})

app.listen(3000, () => {
    console.log("working")
})
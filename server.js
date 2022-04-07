const express = require("express");
const app = express()
const budget = require('./models/budget.js')

app.get('/', (req, res) => {
    res.send('Hello')
})



app.listen(3000, () => {
    console.log("working")
})
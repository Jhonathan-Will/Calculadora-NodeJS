const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

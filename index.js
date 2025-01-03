const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const histoty = require("./database/history")

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection.authenticate().then(() => {
    console.log("Conecão feita com o banco de dados")
}).catch(Error => {
    console.log(Error)
})

app.get("/", (req, res) => {
    res.render("index")
})

app.listen("8080", () => {
  
})
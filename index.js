const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const history = require("./database/history")

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

app.post("/salvar", (req, res) => {
    let number1 = req.body.number1;
    let operator = req.body.operator;
    let number2 = req.body.number2;

    history.create({
        firstnumber: number1,
        operator: operator,
        secondnumber: number2
    }).then(() => {
        console.log("dados enviados com sucesso")
    }).catch((Error) => {
        console.log(Error)
    })
})

app.listen("8080", () => {
  
})
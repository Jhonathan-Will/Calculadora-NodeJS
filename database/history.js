const connection = require("./database")
const Sequelize = require("sequelize")

const History = connection.define('historico', {
    firstnumber: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    operator : {
        type: Sequelize.STRING,
        allowNull: false
    },
    secondnumber: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

History.sync({force: false})

module.exports = History
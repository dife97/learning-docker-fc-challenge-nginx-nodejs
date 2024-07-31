const express = require('express')
const app = express()
const port = 3000
const config = {
  host: "database",
  user: "root",
  password: "root",
  database: "nodedb"
}
const mysql = require("mysql2");
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values("Diego")`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('Eu amo meu mozinho!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
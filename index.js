
const express = require('express')
const mongo = require('./src/mongo/mongo');
const app = express()
const port = 5001


require("dotenv").config();
const cors = require('cors');
app.use(cors())
const bodyParser = require("body-parser");





const {AppRouter} = require("./src/router");

app.listen(port, () => {
  console.log(`servidor iniciado en http://localhost:${port}`)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use("/", AppRouter);


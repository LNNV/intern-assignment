const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;
const address = process.env.IP || '0.0.0.0';
const shoes = require('./shoes.controller')
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/shoes', shoes.getAllShoes)


app.listen(port, address, () => {
  console.log(`App running on port ${port}.`)
})
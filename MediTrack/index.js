const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const RouteIndex = require("./Router/RouteIndex")

app.use(bodyParser.json()); 

app.use("/api",RouteIndex);

app.listen(3000,  () => console.log('Listening at port 3000'));







const express = require('express')
const app = express()
const cors = require("cors");
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('express-async-errors')
require('./startup/db')
require('./startup/routes')(app)




app.get('/',(req,res)=>{
    res.send('Hello World')
})

const port = process.env.PORT || 5000

const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);



const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())

app.get('/', function(req,res){
    const data = require('./data.json')
    res.json(data)
})

app.listen(port, function(err){
    if(err) throw err;
    console.log('server 5000');
})

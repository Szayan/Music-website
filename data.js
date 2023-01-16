const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static('./'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/script.js');
    res.sendFile(__dirname + '/style.css')
  });
 

app.use(cors());


const port = 1010;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${1010}`);
  });

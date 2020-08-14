const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
let server = require('http').Server(app);

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
  res.sendStatus(200);
});

app.get('/index.html', function(req, res,next){
  res.sendFile(path.join(__dirname+"/index.html"));
});

app.post('/contact', function(req, res, next){

});


app.listen(port, () => console.log(`Example app listening at http://localhost: ` + port))




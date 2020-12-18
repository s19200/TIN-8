const express = require('express');
const app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/hello', function(req, res){
    res.send("hello world!");
})

app.get('/form', function(req, res){
    res.render("form");
})
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/formdata', function(req, res){
    console.log(req.body);
   res.render('formdata', {data:{name1:req.body.name2, surname1:req.body.surname2, id1:req.body.id2}})
});

app.post('/jsondata', function(req, res){
    console.log(req.body);
    res.send(req.body);
})


app.listen(3000, ()=> console.log("server is running"))


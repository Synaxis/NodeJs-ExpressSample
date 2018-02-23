const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//check DB connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

//Check for DB issues
db.on('error', function(){
    console.log(err);
});

//Init app
const app = express();

//Bring in Models
let Art = require('./models/article');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Home route
app.get('/', function(req, res){
    Art.find({}, function(err, articles){
        if(err){
            console.log(err);
        } else{
        res.render('index', {
            title:'Articles',
            articles: articles
        });
    }});
});

//Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title:'Add Article'
    });
});

// Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add article'
    });
});

//Add Submit-btn POST Route
app.post('/articles/add', function(req,res){
    //let article = new article();
    //article.title = req.body.title;
    console.log(req.body.title);
    return;    
});

//Start Server
app.listen(82, function(){
    console.log('Server started on port 82')
});
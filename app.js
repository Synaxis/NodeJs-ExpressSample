const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
let Article = require('./models/article');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Public folder calling
app.use(express.static(path.join(__dirname, 'public')));

//Home route
app.get('/', function(req, res){
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        } else{
        res.render('index', {
            title:'Articles',
            articles: articles
        });
    }});
});

// Get Single Article
app.get('/article/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
      
    });
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

//this needs refacotr
//Add Submit-btn POST Route
app.post('/articles/add', function(req,res){
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    
    article.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
});

//Start Server
app.listen(82, function(){
    console.log('Server started on port 82')
});
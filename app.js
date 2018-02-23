const express = require('express');
const path = require('path');


//Init app
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Home route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title:'Article One',
            author:'Brad traversy',
            body:'This is article one'
        },
        {
            id:2,
            title:'Article two',
            author:'jon traversy',
            body:'This is article one'
        },
        {
            id:3,
            title:'Article 3',
            author:'feve traversy',
            body:'This is article one'
        }
    ];
    res.render('index', {
        title:'Articles',
        articles: articles
    });
});

//Add Route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title:'Add Article'
    });
});



//Start Server
app.listen(82, function(){
    console.log('Server started on port 82')
});
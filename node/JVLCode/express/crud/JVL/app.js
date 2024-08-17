const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const dataBaseObject = require('./db');

app.engine('hbs',exhbs.engine({
    layoutsDir : 'views/',
    defaultLayout : 'main',
    extname : 'hbs' 
}));

app.set('view engine', 'hbs');

app.set('views', './views'); 

app.get('/', async (req, res, next) => {
    let dataBase = await dataBaseObject.getDatabase();
    const collection = dataBase.collection('books');
    const cursor = collection.find({});
    let employees = cursor.toArray();
    let message = 'test';
    res.render('main', {
        message,
        employees
    })
});

app.listen(3000);
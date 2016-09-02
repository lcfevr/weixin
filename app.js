/**
 * Created by Administrator on 2016/5/18 0018.
 */
var Express=require('express');
var app=new Express();
var bodyParser=require('body-parser');
var ejs=require('ejs');
var routes=require('./route');
var path=require('path');
var mongoose=require('mongoose');

var dbUrl='mongodb://localhost/users';
mongoose.connect(dbUrl);
console.log('mongoDB has been connect');
app.engine('.ejs', ejs.__express);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/public/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(path.join(__dirname, '/public')));
routes(app);
app.listen(80);
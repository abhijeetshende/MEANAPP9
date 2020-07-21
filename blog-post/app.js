var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/post');
var macRouter = require('./routes/mac');
var networkRouter = require('./routes/network');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog-post',{
    promiseLibrary:require('bluebird'),
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err);
});
var cors = require('cors');
var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/mac', macRouter);
app.use('/network', networkRouter);

module.exports = app;

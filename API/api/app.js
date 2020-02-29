const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
const router=require('./Route/router')
app.use(morgan('dev'));
app.use('/',router)
module.exports=app;
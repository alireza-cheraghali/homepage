const express=require('express');
const route=express.Router();
const charte=[];
var exam;

route.get('/chart',(req,res,next)=>{
    var product={
        name:req.body.name,
        price:4
    }
    for(let i=0;i<product.price;i++){
        let number=Math.random()*10+1;
        charte.push(number);
    }
    res.status(200).json({
        message:'Hello World',
        Product:product,
        Numbers:charte,
        el:exam
    })
})
route.post('/chart',(req,res,next)=>{
     exam=req.body.examOption;
    res.status(201).json({
        message:exam
    })
})
module.exports=route
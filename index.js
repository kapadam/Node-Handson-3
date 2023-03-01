const express=require('express');
const app=express();

const middleware1=(req,res,next)=>{
    console.log("I am in middleware 1.");
    console.log("I got the first request");
    next();
};
const middleware2=(req,res,next)=>{
    console.log(req+"I am in middleware 2.");
    next();
}

app.use(middleware1);

app.get('/',middleware1,(req,res)=>{
    console.log('Received the login request.');
    res.send("Middleware 1");
})

app.get('/second',middleware2,(req,res)=>{
    console.log("Second middleware request received.");
    res.send("Middleware 2");
})

app.listen(6969,()=>{
    console.log("Port 6969 has been listened.");
})
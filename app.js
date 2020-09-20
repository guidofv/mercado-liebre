const express = require('express');
const app = express();
const path = require('path');

app.listen(3030,()=>{
    console.log('Server running on port 3030');
});

app.get('/',function(req,res){
    let file = path.resolve('index.html');
    res.sendFile(file);
})

app.get('*',function(req,res){
    if(req.url.endsWith('.css')){
        let file = path.resolve('public/styles' + req.url);
        res.sendFile(file);
    }

    let images = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
    let ext = req.url.split('.')[1];

    if(images.includes(ext)){
        let file = path.resolve('public/images' + req.url);
        res.sendFile(file);
    };
});
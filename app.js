const express = require('express')
const http  = require('http')
const app = express()

// http.createServer(function(req,res){

//     res.end("The end")

// }).listen(8080)

app.listen(8080, function(){
    console.log('Running...')   
})

app.get('/', function(req,res){
    
})

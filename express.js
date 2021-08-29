var http  = require('express')

http.createServer(function(req,res){

    res.end("The end")

}).listen(8080)
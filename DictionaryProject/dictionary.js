var http = require('http');
var url  = require('url');
var fs   = require('fs');
var word = require('./word.js')

http.createServer(function(req,res){
    var q = url.parse(req.url,true)
    var qdata= q.query;
    var fileName= "." + q.pathname;
    console.log(q.pathname);
    console.log(word.fileName);
    if(q.pathname == "/word.js"){
        console.log(qdata)
        word.search(req,res,qdata);
    }

}).listen(8030);
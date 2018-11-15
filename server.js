var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.Server(app);
  var bodyParser = require('body-parser');
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.get('/', function(request,response){
    response.sendFile(__dirname+'/index.html');
  });
  
  app.get('/about', function(request,response){
    response.sendFile(__dirname+'/about.html');
  });
  
  var article = [];
  app.get('/new-article', function(request,response){
    response.sendFile(__dirname+'/form.html');
  });
  
  app.post('/article/create' , function(request,response){
    console.log(request.body);
    if(!request.body.title){
        return response.status(400).json({error: "Please Add A Title"});
    }
    article.push(request.body);
    return response.status(200).json({result: "Article Successfully Created"});
  });
  
  app.get('/article/list', function(request, response) {
      return response.status(200).json({article: article})
  })
  
  server.listen(process.env.PORT, process.env.IP, function(){
     console.log('Server running');
  });

  
  
  
// var fs = require('fs');
  
//   var server = http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     fs.readFile('index.html', function(err,data){
//       if(err){
//           return console.log("File Read Error");
//       }  
//       res.end(data);
//     })
// //    res.end("Hello World\n");
//   });
//   server.listen(process.env.PORT, process.env.IP, function(){
//     console.log('Server running');
//   });
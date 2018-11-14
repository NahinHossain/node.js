//  var http = require('http');
//  var fs = require('fs');
 
//   var server = http.createServer(function(req, res)
//   {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end("Hello World\n");
    
//         res.setHeader('Content-Type', 'text/html');
//         fs.readFile('index.html', function(err, data){
        
//         if(err)
//         {
//             return console.log('File Read Error!');
//         }
        
//         res.end(data);
        
//         });
        
//   });
//   server.listen(process.env.PORT, process.env.IP, function(){
//     console.log('Server running');
//   });






var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded:true}));


app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
    

    
});




app.get('/about', function(request, response){
    response.sendFile(__dirname+'/about.html');
    

    
});


 app.get('/new-article', function(request, response)
  {
      response.sendFile(__dirname+'/form.html');
  });
  
  
  
  app.post('/api/article/create', function(request, response)
  {
      console.log(request.body);
      if(!request.body.title){
         
          return response.status(400).json({error: 'PLease add a title!'});
      }
      response.status(200).json({message: 'Article Created!'});
  });
  

 server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
    
  });
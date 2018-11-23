module.exports = function(app){
    
    var Article = require('../models/article.js');
    var article = require('./../controllers/article-controllers.js');
    app.get('/new-article', article.new);
    
    app.post('/article/create', function(request,response){
      var new_article = new Article(request.body);
      new_article.save(function(err,data){
        if(err)
          return response.status(400).json({error: "Please add a title"});
        console.log(data);
        return response.status(200).json({message: "Article successfully created!"});
      });
    });
    
    app.get('/article/list', function(request, response){
      return response.status(200).json({article: article});
    });
    
    var article = [{title:"1", content:"c1"}];
    app.get('/article/:articleID', function(request, response){
      response.render(__dirname+'/views/article.ejs', {
        article: article[request.params.articleID]
      });
    });


}
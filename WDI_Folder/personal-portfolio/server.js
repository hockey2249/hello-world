var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models/'); 

app.get('/api/blogs', function(req, res){
	db.Blog.find(function(err, blogs){
		if (err){
			return console.log("index error: " + err);
		}
		res.json(blogs);
	});
});

app.get('/api/blogs/:id', function (req, res) {
  db.Blog.findOne({_id: req.params.id }, function(err, data) {
  		if (err){
			return console.log("index error: " + err);
		}
    res.json(data);
  });
});

app.post('/api/blogs', function (req, res) {
	var blog = new db.Blog(req.body);
  	blog.save(function(err) {
  		if (err){
			return console.log("Post error: " + err);
		}
  });
});




app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
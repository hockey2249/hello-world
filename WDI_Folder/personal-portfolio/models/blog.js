var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
	  author: String,
	  title: String,
	  body: String,
	  link: String
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
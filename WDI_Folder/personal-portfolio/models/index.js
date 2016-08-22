var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog-app");

module.exports.Blog = require("./blog.js");

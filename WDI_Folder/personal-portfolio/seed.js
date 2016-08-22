var db = require('./models');

var blog_post = [
  {
    "id": 0,
    "author": "Kyle Gibbons",
    "title": "Digital Marketing Best Practices",
    "body": "What would you ask if you could score an exclusive sit-down with a successful startup leader or entrepreneur? As a solopreneur myself, I’m always eager to learn about the marketing secrets that kick-start a company’s rise to success. From SEO and mobile marketing to influencer outreach and content marketing, keeping pace with the latest digital marketing trends is a serious challenge. Gaining insight from someone who’s been in the marketing trenches before is invaluable. Recently, I had the opportunity to sit down with four startup leaders. These successful visionaries shared their predictions for digital marketing trends in 2016.",
    "link": "http://www.business.com/online-marketing/successful-business-leaders-tell-all-top-digital-marketing-trends-for-2016/"
  },
    {
    "id": 1,
    "author": "Kyle Gibbons",
    "title": "What Is SEO?",
    "body": "SEO stands for “search engine optimization.” It is the process of getting traffic from the “free,” “organic,” “editorial” or “natural” search results on search engines.All major search engines such as Google, Bing and Yahoo have primary search results, where web pages and other content such as videos or local listings are shown and ranked based on what the search engine considers most relevant to users. Payment isn’t involved, as it is with paid search ads.",
    "link": "http://searchengineland.com/guide/what-is-seo"
  }
];

db.Blog.remove({}, function(err, blogs){
   if(err) {
    console.log('Error occurred in remove', err);
   } else {
     console.log('removed blog');
    db.Blog.create(blog_post , function(err, blogs){
  if (err) { return console.log('err', err); }
    console.log("created", blogs.length, "blogs");
    process.exit();
  });
  }
});
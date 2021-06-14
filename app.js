// Setup
var express = require('express');
var app = express();
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/youtube_LA4")
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);
// Routes
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/youtube_LA4")

app.get("/", (req, res) => {
   Post.find({}, (err, posts) => {
      res.render('index', { posts: posts})
   });
});
app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/video.html');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});
// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})
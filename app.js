
/**
 * Module dependencies
 */
    var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path'),
    router = express.Router(),
    app = module.exports = express();

    var routes = require('./routes/index');
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(morgan('dev'));
    app.use(bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
// serve index and view partials
app.use('/', routes);
app.get('/partials/:name', function (req, res)
{ var name = req.params.name;
   res.render('partials/' + name);
});


//API calls
app.get('/api/getPosts',function(req,res){
    api.getAllPosts(req,res);
});

app.post('/api/addPost',function(req,res){
    console.log('in addpost');
    api.addPost(req,res);
});

// JSON API
//app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

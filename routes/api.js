// initialize our faux database
var data = {
  "posts": [
    {
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "title": "Sed egestas",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ]
};


var getAllPosts = function(req, res){
      res.json({
          posts: data.posts
        });
}

var addPost = function(req, res){
    data.posts.push(req.body);
    res.json(req.body);
}

 module.exports = {
  getAllPosts : getAllPosts,
  addPost : addPost
 };





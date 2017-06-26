var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo"); 

var Post = require("./models/post");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userChema = new mongoose.Schema({
   email: String,
   name: String, 
   posts: [postSchema]
});

var User = mongoose.model("User", userChema);



// var newUser = new User({
//     email: "nicky@flausch.edu",
//     name: "Nicky Flausch"
// });

// newUser.posts.push({
//     title: "How to catch a stick",
//     content: "Jump high!!!"
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflection on Meatballs",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

// User.findOne({name: "Nicky Flausch"}, function(err, user){
//     if(err){
//         console.log(err); 
//     } else {
//         user.posts.push({
//             title: "3 things I really love",
//             content: "Meatballs, Meatballs, Meatballs"
//         });
//         user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//     }
// });
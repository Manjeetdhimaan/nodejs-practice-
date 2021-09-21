const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/users');
 var bodyParser = require('body-parser');
 var jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://mani:mfhvOaeYeQXP60Oz@cluster0.14vpn.mongodb.net/nodeJs?retryWrites=true&w=majority', 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);

app.get('/users', function(req, res){
  User.find().select('email').then((data)=>{
      res.json(data)
  })
})

app.post('/users', jsonParser, function(req, res){
    res.end('Post api will be here!')
})

app.listen(3000, function(){
    console.log('listening port:3000')
})

// const data = new User({
//     _id: new mongoose.Types.ObjectId(),
//     name:'sukhraas',
//     email:'sukhraas@test.com',
//     address:'Patiala'
// });

// data.save().then((result) => {
//     console.log(result)
// }).catch((err)=>console.log(err))



// connected with mongodb and created a model.

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const User = require('./users')
// // myFirstDatabase
// mongoose.connect('mongodb+srv://mani:mfhvOaeYeQXP60Oz@cluster0.14vpn.mongodb.net/nodeJs?retryWrites=true&w=majority', 
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
// )

// User.find({}, function(err, users){
//     if(err)console.log(err);
//     console.log(users)
// })




// basic node login form and rendering files with nodejs

// const express = require('express');

// const app = express();

// var bodyParser = require('body-parser');
// var encoder = bodyParser.urlencoded();
// app.use('/assests', express.static('assests'))
// app.set('view engine', 'ejs')
// app.get('/profile/:name', function(req, res){
//     data={email:'test@test.com', address:'mohali', skills:['javascript', 'angular', 'git', 'react']}
//    res.render('Profile', {name:req.params.name, data:data})
//    console.log(req.params.name)
// })

// app.get('/', function(req, res){
// res.render('Home')
// })
// app.post('/login',encoder,  function(req, res){
//     console.log(req.body.email)
//     res.render('home')
//     })

// app.get('/login', function(req, res){
// res.render('login')
// })
// app.listen(3000, function () {
//     console.log("Express server listening on port 3000");
// })


// 




// const express = require('express');
// const app = express();

// const router = express.Router();

// const checkUrl = require('./middleware')

// app.get('/', function(req, res){
//     // res.send("Hello this is home page")
//     res.sendFile(__dirname+"/Home.html")
//     });
// router.get('/about', checkUrl, function(req, res){
// // res.send("Hello this is about page")
// res.sendFile(__dirname+"/About.html")

// });
// app.get('/login', function(req, res){
// // res.send("Hello this is login page")
// res.sendFile(__dirname+"/Login.html")

// });


// app.use('/', router)
// app.listen(3000, function () {
//     console.log("Express server listening on port 3000");
//     });
  
    



    // for sending email
// var nodeMailer = require('nodemailer')
// var transport = nodeMailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'test@test.com',
//         pass:''
//     }
// });
// var mailOptions = {
//     from:'test@gmail.com',
//     to:'skmarch28@gmail.com',
//     subject:'node js demo',
//     text:'hello node js'
// }
// transport.sendMail(mailOptions, function(error, info){
// if(error){
// console.warn(error)
// }
// else{
//     console.warn("email has been sent", info.response)
// }
// })
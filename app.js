const express = require('express');
const app = express();

const router = express.Router();

const checkUrl = require('./middleware')

app.get('/', function(req, res){
    // res.send("Hello this is home page")
    res.sendFile(__dirname+"/Home.html")
    });
router.get('/about', checkUrl, function(req, res){
// res.send("Hello this is about page")
res.sendFile(__dirname+"/About.html")

});
app.get('/login', function(req, res){
// res.send("Hello this is login page")
res.sendFile(__dirname+"/Login.html")

});


app.use('/', router)
app.listen(3000, function () {
    console.log("Express server listening on port 3000");
    });
  
    



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
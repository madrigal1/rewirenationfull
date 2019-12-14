const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/client.js');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true}).then(()=>{
  console.log("db.connected");
}).catch(()=>{
  console.log("error");
});

const Msg = mongoose.model('Message', { name: String });
//statsic files
app.use(express.static('public'));

//bodyparser middleware
app.use(bodyParser.json());
app.set('view engine','ejs');

//routehadnling middleware
app.use(routes);
//app.use('/api',require("./routes/api.js"));
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
        const usermsg = new Msg({name: msg});
        usermsg.save().then(()=> {
            console.log("successful db entry");
        }).catch((e)=>{
                console.log(e);
        });
        Msg.find({},(doc)=>{
            console.log(doc);
        });
      });
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
  });

http.listen(3000, function(){
    console.log('listening on *:3000');
  });


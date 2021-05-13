const express = require("express");

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('static')); 
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('send message', function(msg) {
	io.emit('receive message', msg);
  });
});

http.listen(9090, function() {
  console.log('listening on http://localhost:9090');
});
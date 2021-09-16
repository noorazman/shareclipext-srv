var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(process.argv[2], function(){
    console.log('listening for requests on port ' + process.argv[2]);
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle typing event
    socket.on('data', function(data){
        console.log(`Got data: ${data}`)
        socket.broadcast.emit('data', data);
    });

});

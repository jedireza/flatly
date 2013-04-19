var connect = require('connect')
  , http = require('http')
  , fs = require('fs')
  , app = connect()
    .use(connect.favicon())
    .use(connect.static('public'))
  , server = http.createServer(app)
  , watchr = require('watchr')
  , childProcess = require('child_process');

//start the server
server.listen(1138, function() {
  //keep track of this process id
  fs.writeFileSync(__dirname + '/.pid', process.pid, 'utf-8');
  
  //watch for changes
  watchr.watch({
    paths: [
      __dirname +'/../assets/',
      __dirname +'/../templates/'
    ],
    listener: {
      change: function() {
        childProcess.exec('make --file='+ __dirname +'/../Makefile', function(error, stdout, stderr) {
          console.log(' ✔ re-built files');
        });
      }
    }
  });
});

//catch server errors
server.on('error', function(err) {
  console.log('Error starting server. Already started?');
});

//when this process exits, kill the child process
process.on('exit', function() {
  if(childProcess.kill) childProcess.kill();
});
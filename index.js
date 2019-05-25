var express = require('express'),
path = require('path'),
app = express();

var port = process.env.PORT || 8080
app.set('port', port);
app.use(express.static(path.join(__dirname, '/dist')));

var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
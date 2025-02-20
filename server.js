var http = require('http')

http.get('http://localhost:3000')

http.createServer(function (req, res) {
	res.write('helllo')
	
	res.end();
}).listen(3005)
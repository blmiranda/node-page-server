const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let path = req.url;
	if (path == '/' || path == '') {
		path = '/index.html'
	}

	let fileName = '.' + path;

	fs.readFile(fileName, (error, data) => {
		if (error) {
			res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
			res.end('Page not found!')
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.write(data);
			res.end()
		}
	})
}).listen(3000, (error) => {
	if (error)
		console.log(error);
	else
		console.log('Server running on port 3000');
})

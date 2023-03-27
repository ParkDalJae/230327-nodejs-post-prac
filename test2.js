const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        fs.writeFile('result.html', body, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File saved successfully.');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>File saved successfully.</h1></body></html>');
        });
    });
    } else {
    fs.readFile('index.html', (err, data) => {
        if (err) {
        console.error(err);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>404 Not Found</h1></body></html>');
        } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        }
    });
    }
});

server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});
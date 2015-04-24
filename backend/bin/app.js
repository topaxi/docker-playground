import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Hello World ${process.env.TEST}\n`)
}).listen(3000)

console.log('Server running at http://0.0.0.0:3000/');

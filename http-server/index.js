// Create a basic server using http's createServer

// listen for request on port 5000
// console request and response object
// do a request using browser on localhost:5000
// check out console for request and response object

let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer(handlRequet)

function handlRequet(req, res) {
  console.log(req, res)
}

server.listen(5000, () => {
  console.log('port num 5000')
})

// create a node server

// add listener on port 5100
// respond with 'My first server in NodeJS' using response object

let nodeServer = http.createServer(handleNodeServer)

function handleNodeServer(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.write('{My first server in NodeJS}')
  res.end()
}

nodeServer.listen(5100, () => {
  console.log('port num 5100')
})

// write code to create a node server

// add listener on port 5555
// console request headers
// respond with content of user-agent from request headers.

let nodeServer2 = http.createServer(handleNodeServer2)

function handleNodeServer2(req, res) {
  console.log(req.headers)
  res.end(req.headers['user - agent'])
}
nodeServer2.listen(5555, () => {
  console.log('port num 5555')
})

// . write code to create a node server

// add listener on port 5566
// console request url and request method
// return a text response with requested url and method

let nodeServer4 = http.createServer(handleNodeServer4)

function handleNodeServer4(req, res) {
  console.log(req.url, req.method)
  res.end(req.method + req.url)
}

nodeServer4.listen(5566, () => {
  console.log('listinng to port num 5566')
})

// write code to create a node server

// add listener on port 7000
// also add a callback function to listener with a console server listening on port 7000
// return entire request headers in response.

let nodeServer5 = http.createServer(handleNodeServer5)

function handleNodeServer5(req, res) {
  console.log(JSON.stringify(req.headers))
}

nodeServer5.listen(7000, () => {
  console.log('listining to port num 7000')
})

//  create a server

// add a listener on port 3333
// set status code 202 in response using res.statusCode.

let nodeServer6 = http.createServer(handleNodeServer6)

function handleNodeServer6(req, res) {
  res.statusCode = 202
  req.end(JSON.stringify(req.headers))
}

nodeServer6.listen(3333, () => {
  console.log('listing port num 3333')
})

// create a server

// add a listener on port 8000
// set appropriate header for html response using res.setHeader
// return an HTML response(<h3>Welcome to altcampus</h3>)

let nodeServer7 = http.createServer(handleNodeServer7)

function handleNodeServer7(req, res) {
  res.setHeader('Content-type', 'text/html')
  res.end('<h3>Welcome to altcampus</h3>')
}

nodeServer7.listen(8000, () => {
  console.log('listing port num 8000')
})

// Q. Repeat above question using res.writeHead to set status code and Content-Type at the same time.

let nodeServer8 = http.createServer(handleNodeServer8)

function handleNodeServer8(req, res) {
  res.writeHead(300, { 'Content-type': 'text/html' })
  res.end('<h3>Welcome to altcampus</h3>')
}

nodeServer8.listen(9000, () => {
  console.log('listing port num 9000')
})

// Q. create a basic node server

// add a listener at port 8888
// add appropriate header for json response
// send json response({success: true, message: 'Welcome to Nodejs'})

let nodeServer9 = http.createServer(handleNodeServer9)

function handleNodeServer9(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ success: true, message: 'Welcome to Nodejs' }))
}
nodeServer9.listen(8888, () => {
  console.log('listing port num 8888')
})

// Q. create a server

// add listener on port 5050
// use postman to do a POST request on index route
// console to check request method
// send HTML response i.e. <h2>posted for first time</h2>

let nodeServer10 = http.createServer(handleNodeServer10)

function handleNodeServer10(req, res) {
  res.setHeader('Content-Type', 'text/html')
  console.log(req.method)
  res.end('<h2>posted for first time</h2>')
}

nodeServer10.listen(5050, () => {
  console.log('listing port num 5050')
})

// create a server and handle 2 different requests 11
// add a listener on port 2345
// handle GET request on '/' route where return your name in plain text in response
// handle GET request on '/about' route and return your name in h2 as HTML page.
// add a error handler at last to handle request made on other than above routes with a status code of 404.

let nodeServer11 = http.createServer(handlRequet)

function handlRequet(req, res) {
  if (req.method == 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Naresh')
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h2> Naresh Rajput </h2>')
  } else {
    res.statusCode = 404
    res.end('page not found ')
  }
}

nodeServer11.listen(2345, () => {
  console.log('listing port num 2345')
})

//  Handle 2 requests on same route with different method 1. GET on '/users' route where return a simple HTML form with name and email field 2. POST on '/users' route with a message 'Posted for the second time'.

let nodeServer12 = http.createServer(handlRequet2)

function handlRequet2(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream('./form.html').pipe(res)
  } else if (req.method === 'POST' && req.url === '/users') {
    // res.setHeader('Content-Type', 'text/plain')
    res.end('Posted for the second time')
  }
}

nodeServer12.listen(23456, () => {
  console.log('listen port num 23456')
})

//  create a server and handle query params from the request on following url i.e. /users?email=nodeserver@gmail.com from browser

// parse the request url using parse method from url module
// console pathname from parsed url in above step
// grab url using req.url
// differentiate between req.url and parsedUrl.pathname
// grab the email from query params
// return json response with email from query params

let nodeServer13 = http.createServer(handleQuery)

function handleQuery(req, res) {
  let urlData = url.parse(req.url)
  console.log(urlData.pathname)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(urlData.query))
}
nodeServer13.listen(1345, () => {
  console.log('listing port num 1345')
})

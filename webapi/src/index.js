const http = require('http')
const PORT = 3000
const handler = (request, response) => {

    const { url, method } = request
    
    response.end('Hey')
}

http.createServer(handler)
    .listen(PORT, () => console.log('server running at', PORT))
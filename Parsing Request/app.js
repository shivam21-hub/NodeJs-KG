const http = require('http')

const requestHandler = require('./chunk')
const server = http.createServer(requestHandler)

const PORT = 3001
server.listen(PORT, ()=>{
  console.log(`Server running on address http://localhost ${PORT}`)
})
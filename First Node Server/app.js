const http = require('http')

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers)
  // process.exit() // stops event loop

  if(req.url ==='/'){
    res.setHeader('Conten-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Shivam Chowbey</title></head>')
    res.write('<body><h1>Welcome To My Home</h1></body>')
    res.write('</html>')
    return res.end()
  }else if(req.url === '/products'){
      res.setHeader('Conten-Type', 'text/html')
      res.write('<html>')
      res.write('<head><title>Shivam Chowbey</title></head>')
      res.write('<body><h1>Welcome To My Products</h1></body>')
      res.write('</html>')
      return res.end()
      
  }
  res.setHeader('Conten-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Shivam Chowbey</title></head>')
  res.write('<body><h1>Welcome To My World</h1></body>')
  res.write('</html>')
   res.end()
  
}) 

const PORT = 3001
server.listen(PORT, ()=>{
  console.log(`Server running on address http://localhost ${PORT}`)
})
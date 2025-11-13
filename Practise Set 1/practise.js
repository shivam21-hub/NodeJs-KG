const http = require('http')

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method)
  if(req.url === '/home'){
    res.write('<h1>Welcome to Home</h1>')
    return res.end()
  }else if(req.url === '/men'){
    res.write('<h1>Welcome to Men Section</h1>')
    return res.end()
  }else if(req.url === '/women'){
    res.write('<h1>Welcome to Women Section</h1>')
    return res.end()
  }else if(req.url === '/kids'){
    res.write('<h1>Welcome to Kids Section</h1>')
    return res.end()
  }
  if(req.url === '/cart'){
    res.write('<h1>Welcome to Cart Section</h1>')
    return res.end()
  }
  res.write(`
  <html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <head>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </head>
    </body>
  </html>
    `)
    res.end()
})

const PORT = 3001
server.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})
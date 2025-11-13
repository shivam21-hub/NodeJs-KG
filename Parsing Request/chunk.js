
const fs = require('fs')

const requestHandler = (req, res)=>{
  console.log(req.url, req.method)
  // process.exit() // stops event loop

  if(req.url ==='/'){
    res.setHeader('Conten-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Shivam Chowbey</title></head>')
    res.write('<body><h1>Enter Your Details</h1>')
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" name="username" placeholder="Enter your Name"><br>')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name = "gender" value = "male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name = "gender" value = "female" />')
    res.write('<br><input type="submit" value="Submit">')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }else if(req.url.toLowerCase() ==="/submit-details" && req.   method === "POST"){
    const body = []
    req.on('data', (chunk)=>{
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', ()=>{
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody)
      const params = new URLSearchParams(parsedBody)
      // const jsonObj = {}
      // for(const [key, value] of params.entries()){
      //   jsonObj[key] = value
      // }
      const jsonObj = Object.fromEntries(params)
      console.log(jsonObj)
      fs.writeFile('user.txt', JSON.stringify(jsonObj), error =>{
        console.log("Data written Successfully")
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }else{
  res.setHeader('Conten-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Shivam Chowbey</title></head>')
  res.write('<body><h1>Welcome To My World</h1></body>')
  res.write('</html>')
   res.end()
  }
}

module.exports = requestHandler
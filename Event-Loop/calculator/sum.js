const sumRequest = (req, res)=>{
  console.log("In SUm Request Handler", req.url)
  const body = []
  let result;
  req.on('data', (chunk)=>{
    body.push(chunk)
  })
  req.on('end', ()=>{
    const parsedBody = Buffer.concat(body).toString()
    const params = new URLSearchParams(parsedBody)
    const jsonObj = Object.fromEntries(params)
    result = jsonObj.first + jsonObj.second
    console.log(result)
  })
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>
      </html>
    `);
    return res.end()

}

exports.sumRequest = sumRequest
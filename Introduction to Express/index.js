const express = require('express')
const app = express()
const port = 3000

app.use("/",(req, res, next)=>{
  console.log("Came in first middleware", req.url, req.method)
  res.send('<h1>Welcome to Middleware Example</h1>')
  next()
})
app.use("/submit-details",(req, res, next)=>{
  console.log("Came in second middleware", req.url, req.method)
  // res.send('<h1>Shivam Chowbey</h1>') // you cannot call next() after sending a response

})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

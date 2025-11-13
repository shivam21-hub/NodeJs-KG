const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3000

app.use('/', (req, res, next) => {
  console.log("1st Middleware", req.method, req.url)
  next()
})
app.use('/', (req, res, next) => {
  console.log("2nd Middleware", req.method, req.url)
  next()
})

app.get('/',(req, res, next)=>{
  console.log("Handling / for GET", req.url, req.method)
  res.send(`<p>Welcome Sangita</p>`)
})
app.get('/contact-us',(req, res, next)=>{
  console.log("Handling /contact-us for GET", req.url, req.method)
  res.send(`
      <p>Please give your contact details</p>
      <form action = "/contact-us" method = "POST">
      <input type="text" name = "name" placeholder="Enter your nane"/>
      <input type="email" name = "email" placeholder="Enter your email"/>
      <input type="submit">
      </form>
    `)
})

app.post('/contact-us', (req, res, next)=>{
  console.log("First Handling", req.url, req.method, req.body)
  next()
})

app.use(bodyParser.urlencoded())

app.post('/contact-us', (req, res, next)=>{
  console.log("Handling /contact-us for POST", req.url, req.method, req.body)
  res.send(`<p>Thanks for your details</p>`)
})

// app.use('/', (req, res, next) => {
//   console.log("3rd middleware")
//   res.send('Hello Shivam Chowbey')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

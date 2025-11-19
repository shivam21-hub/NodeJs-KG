// Core Module
const path = require('path');

// External Module
const express = require('express');

const { default: mongoose } = require('mongoose');
const cors = require('cors')
const DB_PATH = "mongodb+srv://shivam21:shivam21@completecoding.ylagi0w.mongodb.net/todo?appName=CompleteCoding"


const todoItemsRouter = require('./routes/todoItemsRouter');
const errorsControllers = require('./controllers/errors');


const app = express();
app.use(express.json());

app.use(cors())


app.use(express.urlencoded());

app.use('/api/todo', todoItemsRouter)





// const storeRouter = require('./routes/storeRouter');

app.use(errorsControllers.pageNotFound)

const PORT = 3000;


mongoose.connect(DB_PATH).then(()=>{
  console.log("Coonected to mongo")
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err =>{
  console.log("Error while coonecting to mongoose", err)
})
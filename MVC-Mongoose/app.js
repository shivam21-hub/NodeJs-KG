// Core Module
const path = require('path');

// External Module
const express = require('express');

const app = express();

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsControllers  = require('./controllers/errors');
const { default: mongoose } = require('mongoose');






app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

// const storeRouter = require('./routes/storeRouter');

app.use(errorsControllers.pageNotFound)

const PORT = 3000;
const DB_PATH = "mongodb+srv://shivam21:shivam21@completecoding.ylagi0w.mongodb.net/airbnb?appName=CompleteCoding"

mongoose.connect(DB_PATH).then(()=>{
  console.log("Coonected to mongo")
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err =>{
  console.log("Error while coonecting to mongoose", err)
})
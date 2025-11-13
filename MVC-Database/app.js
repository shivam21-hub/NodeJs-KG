// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsControllers  = require('./controllers/errors');

const db = require("./utils/databaseUtil")

db.execute('SELECT * FROM homes')
.then(([rows, fields])=>{
  console.log("Results of database", rows)
})
.catch(error =>{
  console.log("Error while reading db", error)
})



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

// const storeRouter = require('./routes/storeRouter');

app.use(errorsControllers.pageNotFound)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
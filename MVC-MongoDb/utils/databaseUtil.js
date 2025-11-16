const mongo = require('mongodb')

const MongoClient = mongo.MongoClient

const MONGO_URL = "mongodb+srv://shivam21:shivam21@completecoding.ylagi0w.mongodb.net/?appName=CompleteCoding"

let _db

const mongoConnect = (callback) =>{
  MongoClient.connect(MONGO_URL).then(client =>{
    callback()
    _db = client.db('airbnb')
  }).catch(err =>{
    console.log("Error while connecting mongo", err)
  })
}

const getDB = () =>{
  if(!_db){
    throw new Error("Mongo not Connected")
  }
  return _db
}

exports.mongoConnect = mongoConnect
exports.getDB = getDB
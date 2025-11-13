
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtil')

const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json')


module.exports = class Favourite {
 
  static addToFavourite(homeId, callback){
    Favourite.getFavourites((favoutites) =>{
      if(favoutites.includes(homeId)){
        console.log("home is marked")
      }
      else{
        favoutites.push(homeId)
        fs.writeFile(favouriteDataPath, JSON.stringify(favoutites),callback)
      }
    })
  }

  static getFavourites(callback){
    fs.readFile(favouriteDataPath, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    });
  }

  static deleteById(delHomeId, callback){
    Favourite.getFavourites(homeIds =>{
      homeIds = homeIds.filter(homeId => delHomeId !== homeId)
        fs.writeFile(favouriteDataPath, JSON.stringify(homeIds),callback)
      })
    }

}

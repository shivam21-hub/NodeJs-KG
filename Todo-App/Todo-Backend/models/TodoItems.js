const mongoose = require('mongoose')

const todoItemsSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },

  dates: Date,

  completed:{
    type:Boolean,
    default: false
  },
},
  {timeStamps: true,}
)

module.exports = mongoose.model('TodoItems', todoItemsSchema)
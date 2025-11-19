const TodoItems = require("../models/TodoItems")

exports.createTodoItem = async (req, res, next)=>{
  console.log(req.body)
  const {task, date} = req.body
  const todoItem = new TodoItems({task, date})
  await todoItem.save()
  res.status(201).json(todoItem)
}

exports.getTodoItem = async (req, res, next)=>{
  const todoItem = await TodoItems.find()
  res.json(todoItem)
}

exports.deleteTodoItem = async (req, res, next)=>{
  const { id } = req.params
  await TodoItems.findByIdAndDelete(id)
  res.status(204).json({_id : id})
}

exports.markCompleted = async (req, res, next)=>{
  const { id } = req.params
  const todoItem = await TodoItems.findById(id)
  todoItem.completed = true
  await todoItem.save()
  res.json(todoItem)
}
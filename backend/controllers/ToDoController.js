// APP Requires

// Import the ToDo Schema
const ToDoModel = require('../models/ToDoModel')

// get the data and send it to the web
module.exports.getToDo = async(req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

// save the data function
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body
    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Added Sucessfully");
        console.log(data);
        res.send(data)
    })
    
}
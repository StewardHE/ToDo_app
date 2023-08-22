// APP Requires

// Import the ToDo Schema
const ToDoModel = require('../models/ToDoModel')

// get the data and send it to the web
module.exports.getToDo = async(req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

// Function to Save or add a ToDo 
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

// Function to Update a ToDo 
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel.findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Updated successfully"))
    .catch((err) => console.log(err))

}   

// Function to Delete a ToDo 
module.exports.deleteToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted successfully"))
    .catch((err) => console.log(err))

}   
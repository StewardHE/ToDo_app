// APP Requires
const mongoose = require('mongoose')

// To Do database schema
const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

// export this to another files
module.exports = mongoose.model("ToDo", todoSchema)
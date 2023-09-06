// Connect with the backend

import axios from 'axios'

// The Url of the db
const baseUrl = "http://localhost:5000"

// get all the ToDos from the DB
const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

// This function adds a ToDo in the DB 
const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

// This function updates a ToDo in the DB 
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

// THis function deletes a toDo in the DB
const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data) // show me the data im deleting
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}



// export it to use in other files
export {getAllToDo, addToDo, updateToDo, deleteToDo}
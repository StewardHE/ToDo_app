import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApp";


function App() {

  // Add a ToDO
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")

  // update a ToDO
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  // activate Update mode
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }


  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input 
            type="text" 
            placeholder="Add ToDo" 
            value={text}
            onChange={(e) => setText(e.target.value)}>

              
          </input>
          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
          </div>

        <div className="list">

          {toDo.map((item) => 
          <ToDo 
            key={item._id} 
            text={item.text} 
            updateMode = {() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          /> 
          )}

          
        </div>

      </div>
    </div>
  );
}

export default App;

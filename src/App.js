import { useState } from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [todoItems, setTodoItems] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoItems(prev => [...prev, input])
  }

  const handleDelete = (event,index) => {
    event.preventDefault()
    // const newTodoList = todoItems.filter((tempItem, idx) =>( idx !== index ))
    const newTodoList = todoItems.map((item, idx) => {
      // if(idx !== index) {
      //   newList.push(item)
      // }
      // return newList
       
      return idx !== index ? item :null 
    })
    const newList =  newTodoList.filter(i => i !== null )
    setTodoItems(newList)
  }





  console.log(todoItems);
  return (
    <div className="App">
      <form action="search" className="form" onSubmit={(e) => handleSubmit(e)}>
        <label for="search">
          Task
      </label>
      <input type="text"  value={input} onChange={(e) => setInput(e.target.value)}/>
      <input type="submit" />
    </form>
    {todoItems.map((item, index) => (
      <div key={index}>
        {item}
        <button type="button" onClick={(e) => handleDelete(e,index)} >
          Delete
          </button>
      </div>
    ))}
    </div>
  );
}

export default App;

import Header from "./components/Header";
import { useState } from "react"
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css'
import AddTag from "./components/AddTag";
import AddTask from "./components/AddTask";
import Tags from "./components/Tags";
import Tasks from "./components/Tasks";
import React from 'react'
import { Button } from "@material-ui/core";

function App() {

  const [tags, setTags] = useState([])

  const [tasks, setTasks] = useState([])

  function listOfTags(){
    console.log("This is the values: ",tags)
    return tags;
  }

  const addTag = (tag) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTag = {id, tag}

    // React.useEffect( () => {
    //   setInterval(() => {setTags([...tags, newTag])}, 1000)
    // }, [newTag])

    setTags([...tags, newTag])

    console.log(tag)

    console.log(tags)
    
  };

  const deleteTag = (id) => {

    setTags(tags.filter((tag) => tag.id !== id))
  }

  const clearTags = () => {

    setTags([])
  }


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])

  }

  const deleteTask = (id) => {

    setTags(tasks.filter((task) => task.id !== id))
  }

  const toggleCompleted = (id) => {

    setTasks(tasks.map((task) => task.id === id 
    ? {...task, completed : !task.completed} : task))
  }

  return (
    <div>
      <div className="container">
        <Header />
        <AddTag onAdd={addTag}/>
        {tags.length > 0 ? <Tags tags = {tags} 
            onDelete = {deleteTag}/> 
            : 'No tags'}
        <AddTask onAdd={addTask}/>
        {/* <DatePicker className='datePicker' selected={selectedDate} 
        onChange={date => setSelectedDate(date)}
        minDate = {new Date()}/> */}
      </div>
      <div className="container2">
          <Button variant="contained" color="default">Todo</Button>
          <Button variant="contained" color="primary" >Date</Button>
          <div>
            {tasks.length > 0 ? <Tasks tasks = {tasks} 
            onDelete={deleteTask} onToggle={toggleCompleted} onTags={listOfTags}
            clearTags={clearTags}/> 
            : 'No tasks'}
            </div>
      </div>
    </div>
  );
}

export default App;

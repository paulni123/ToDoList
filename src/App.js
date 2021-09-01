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

  const [taskTags, setTaskTags] = useState([])

  const [tasks, setTasks] = useState([])

  const [toDoButton, setTodoColor] = useState(false)

  const [dateButton, setDateColor] = useState(false)

  const [sortByDate, setSortByDate] = useState(false)

  const [sortByCompleted, setSortByCompleted] = useState(false)

  function listOfTags(){
    console.log("This is the values: ",tags)

    // const tagsText = []
    
    // for (let i = 0; i < tags.length; i++){
    //     tagsText.push(tags[i].tag)
    // }

    // return tagsText

    return tags

  }

  const addTag = (tag) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTag = {id, tag}

    // React.useEffect( () => {
    //   setInterval(() => {setTags([...tags, newTag])}, 1000)
    // }, [newTag])

    setTags([...tags, newTag])
    setTaskTags([...taskTags, newTag])

    console.log(tag)

    console.log(tags)
    
  };

  const deleteTag = (id) => {

    setTags(tags.filter((tag) => tag.id !== id))
  }

  // const clearTags = (tags) => {

  //   setTags([])
  // }


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

  const changeTodoColor = () => {
    setTodoColor(!toDoButton)
    setSortByCompleted(!sortByCompleted)
  }

  const changeDateColor = () => {
    setDateColor(!dateButton)
    setSortByDate(!sortByDate)
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
          <Button variant="contained" onClick={changeTodoColor} color={toDoButton ? "primary": "default"} >Todo</Button>
          <Button variant="contained" onClick={changeDateColor} color={dateButton ? "primary": "default"} >Date</Button>
          <div>
            {tasks.length > 0 ? <Tasks tasks = {tasks} 
            onDelete={deleteTask} onToggle={toggleCompleted} tags={tags}
            onDeleteTag={deleteTag} taskTags={taskTags}
            /> 
            : 'No tasks'}
            </div>
      </div>
    </div>
  );
}

export default App;

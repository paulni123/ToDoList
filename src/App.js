import Header from "./components/Header";
import { useState, useEffect } from "react"
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css'
import AddTag from "./components/AddTag";
import AddTask from "./components/AddTask";
import Tags from "./components/Tags";
import React from 'react'

function App() {

  const [tags, setTags] = useState([])

  const [tasks, setTasks] = useState([])

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

  return (
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
  );
}

export default App;

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { useState } from "react"
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {

  const[selectedDate, setSelectedDate] = useState(null)
  const[addTag, setAddTag] = useState(false)
  const[tags, setTags] = useState([])

  // const addTask

  return (
    <div className="container">
        <Header />
        <AddTask onAdd={() => setAddTag(addTag)}/>
        {tags.length > 0 ? <Tags tags = {tags} 
            onDelete = {deleteTag}/> 
            : 'No tags'}
        <DatePicker className='datePicker' selected={selectedDate} 
        onChange={date => setSelectedDate(date)}
        minDate = {new Date()}/>
    </div>
  );
}

export default App;

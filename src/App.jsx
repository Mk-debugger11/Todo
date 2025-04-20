import './App.css'
import Navbar from './components/navbar'
import todo1 from './assets/todo.png'
import done1 from './assets/done.png'
import Card from './components/taskCard'
import { useState,useEffect } from 'react'
function App() {
  const [theme,setTheme] = useState("light")
  const[tasks,setTasks] = useState(()=>{
    const array = JSON.parse(localStorage.getItem('taskStorage')) || []
    return array
  })
  useEffect(()=>{
    localStorage.setItem('taskStorage',JSON.stringify(tasks))
  },[tasks])
  const todo = tasks.filter((ele)=>{
    return ele.done === false
  })
  const done = tasks.filter((ele)=>{
    return ele.done === true
  })
  function handleArray(task){
    setTasks([...tasks,task])
  }
  function handleCheck(id){
    const updated = tasks.map((ele)=>{
      if(ele.id === id){
        return { ...ele, done: true };
      }
      else{
        return ele
      }
    })
    setTasks(updated)
  }
  function handleDelete(id){
    const updated = tasks.filter((ele)=>{
      if(ele.id !== id){
        return ele;
      }
    })
    setTasks(updated)
  }
  const [edit,setEdit] = useState(null)
  function handleEditTask(id){
    setEdit(id)
  }
  function handleEdi(id,newtitle,priority){
    const updated = tasks.map((ele)=>{
      if(ele.id === id){
        return {...ele,title:newtitle,priority:priority}
      }
      else{
        return ele
      }
    })
    setTasks(updated)
    setEdit(null)
  }
  function handleTheme(thm){
    setTheme(thm)
  }
  return(
    <div className={`main ${theme}`}>
      <Navbar taskArray={handleArray} theme1 = {handleTheme} ></Navbar>
      <div className="body">
        <div className="todo align">
          <div>
            <img src={todo1} className='im'/>
            <h1 className='heading'>To-do</h1>
          </div>
          {!(todo.length === 0) ? todo.map((ele)=>{
            return (
            <Card
            key={ele.id}
            id = {ele.id}
            title = {ele.title} //this is passing data from parent to child 
            category = {ele.category} 
            priority={ele.priority} 
            handleEdit={handleEdi} 
            edit1={edit === ele.id} 
            editClick={()=>{handleEditTask(ele.id)}} 
            deleteClick = {()=>{handleDelete(ele.id)}} 
            onchange = {()=>{handleCheck(ele.id)}}/>
            )
          }): <h3 className='status'>Add some tasks</h3>}
        </div>
        <div className="done1 align">
          <div>
            <img src={done1} className='im'/>
            <h1 className='heading'>Done</h1>
          </div>
          { !(done.length === 0) ? done.map((ele)=>{
            return (
            <Card key={ele.id} title = {ele.title} category = {ele.category} priority={ele.priority} doneCard = "done" theme={theme}/>
          )
          }) : <h3 className='status' >No tasks completed</h3>}
        </div>
      </div>
    </div>
  )
}
export default App;

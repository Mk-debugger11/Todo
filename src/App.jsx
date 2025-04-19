import './App.css'
import Navbar from './components/navbar'
import todo1 from './assets/todo.png'
import done1 from './assets/done.png'
import Card from './components/taskCard'
function App() {
  const tasks = [
    {
      title: "Finish React project",
      category: "Work",
      priority: "High",
      done:false,
    },
    {
      title: "Grocery shopping",
      category: "Personal",
      priority: "Medium", //#FB8C00
      done:false,
    },
    {
      title: "Read a book",
      category: "Leisure",
      priority: "Low" ,//#66BB6A
      done:false,
    },
    {
      title: "Finish React project",
      category: "Work",
      priority: "High",
      done: false
    },
    {
      title: "Grocery shopping",
      category: "Personal",
      priority: "Medium",
      done: true,
    },
    {
      title: "Read a book",
      category: "Leisure",
      priority: "Low",
      done: true,
    }
  ];
  const todo = tasks.filter((ele)=>{
    return ele.done === false
  })
  const done = tasks.filter((ele)=>{
    return ele.done === true
  })
  return(
    <div className='main'>
      <Navbar></Navbar>
      <div className="body">
        <div className="todo align">
          <div>
            <img src={todo1} className='im'/>
            <h1 className='heading'>To-do</h1>
          </div>
          {!(todo.length === 0) ? todo.map((ele)=>{
            return (
            <Card title = {ele.title} category = {ele.category} priority={ele.priority}/>
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
            <Card title = {ele.title} category = {ele.category} priority={ele.priority} doneCard = "done"/>
          )
          }) : <h3 className='status' >No tasks completed</h3>}
        </div>
      </div>
    </div>
  )
}
export default App

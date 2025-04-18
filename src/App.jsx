import './App.css'
import Navbar from './components/navbar'
import todo from './assets/todo.png'
import done from './assets/done.png'
import Card from './components/taskCard'
function App() {
  const tasks = [
    {
      title: "Finish React project",
      category: "Work",
      priority: "High"
    },
    {
      title: "Grocery shopping",
      category: "Personal",
      priority: "Medium" //#FB8C00
    },
    {
      title: "Read a book",
      category: "Leisure",
      priority: "Low" //#66BB6A
    }
  ];
  return(
    <div className='main'>
      <Navbar></Navbar>
      <div className="body">
        <div className="todo align">
          <div><img src={todo} className='im'/><h1 className='heading'>To-do</h1></div>
          {tasks.map((ele)=>{
            return <Card title = {ele.title} category = {ele.category} priority={ele.priority}/>
          })}
        </div>
        <div className="done align">
          <div><img src={done} className='im'/><h1 className='heading'>Done</h1></div>
        </div>
      </div>
    </div>
  )
}
export default App

import './App.css'
import Navbar from './components/navbar'
import todo1 from './assets/todo.png'
import done1 from './assets/done.png'
import Card from './components/taskCard'
import { useState, useEffect, useRef } from 'react'
import Button from './components/button'
import Dropdown from './components/dropdown'
import filterImg from './assets/filter.png'
import usetaskStore from './store/zustandStore'
function App() {
  const globalTasks = usetaskStore(state => state.tasks)
  const deleteTask = usetaskStore(state => state.deleteTask)
  const toggleStatus = usetaskStore(state => state.toggleStatus)
  const theme = usetaskStore(state => state.theme)
  const priorityOptions = ["High", "Medium", "Low"]
  const [catArr,setcatArr] = useState([])
  const todo = globalTasks.filter((ele) => {
    return ele.done === false
  })
  const done = globalTasks.filter((ele) => {
    return ele.done === true
  })
  done.sort((a,b)=>b.id - a.id)
  const [edit, setEdit] = useState(null)
  function handleEditTask(id) {
    setEdit(id)
  }
  const [filter,setFilter] = useState(false)
  const filterRef = useRef(null)
  useEffect(()=>{
    function handleClick(event){
      if(filterRef.current && !filterRef.current.contains(event.target)){
        setFilter(false)
      }
    }
    document.addEventListener('mousedown',handleClick)
  },[])
  const [catFilter,setCatFilter] = useState("")
  const [priorityFilter,setPriorityFilter] = useState("")
  const [filterArray,setFilteredArray] = useState([])
  useEffect(()=>{
    const filteredArray = todo.filter((ele)=>{
      const pri = catFilter === "" || ele.category === catFilter
      const cat = priorityFilter === "" || ele.priority === priorityFilter
      const don = ele.done === false
      return pri && cat && don
    })
    filteredArray.sort((a,b)=>b.id - a.id)
    setFilteredArray(filteredArray)
  },[catFilter,priorityFilter,globalTasks])
  return (
    <div className={`main ${theme}`}>
      <Navbar catArr = {(e)=>{setcatArr(e)}}></Navbar>
      <div className="body">
        <div className="todo align">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'330px'}}>
            <div>
              <img src={todo1} className='im' />
              <h1 className='heading'>To-do</h1>
            </div>
            <div className='filterMenu'>
              <Button onclick = {()=>{setFilter(true)}} name={<img src={filterImg} style={{width:'25px', height:'auto'}}/>} class="filter"/>
              {filter &&
              <div className='filterCard' ref={filterRef}>
                <Dropdown value={priorityFilter} options = {priorityOptions}  type1 = "Priority" class="filterDropdown" onchange={(e)=>{
                  setPriorityFilter(e.target.value)
                }}/>
                <Dropdown value={catFilter} options = {catArr}  type1 = "Category" class="filterDropdown" onchange={(e)=>{
                  setCatFilter(e.target.value)
                }}/>
              </div>
              }
            </div>
          </div>
          <div className='todoCards'>
            {!(todo.length === 0) ? filterArray.map((ele) => {
              return (
                <Card
                  key={ele.id}
                  id={ele.id}
                  title={ele.title} //this is passing data from parent to child 
                  category={ele.category}
                  priority={ele.priority}
                  handleEdit={()=> {setEdit(null)}}
                  edit1={edit === ele.id}
                  editClick={() => { handleEditTask(ele.id) }}
                  deleteClick={() => { deleteTask(ele.id) }} //done in zustand
                  onchange={() => { toggleStatus(ele.id) }} /> //done in zustand
              )
            }) : <h3 className='status'>Add some tasks</h3>}
          </div>
        </div>
        <div className="done1 align">
          <div>
            <img src={done1} className='im' />
            <h1 className='heading'>Done</h1>
          </div>
          <div className='todoCards'>
            {!(done.length === 0) ? done.map((ele) => {
              return (
                <Card key={ele.id} title={ele.title} category={ele.category} priority={ele.priority} doneCard="done" theme={theme} />
              )
            }) : <h3 className='status' >No tasks completed</h3>}</div>
        </div>
      </div>
    </div>
  )
}
export default App;

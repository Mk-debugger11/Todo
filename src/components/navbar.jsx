import { useEffect, useState } from 'react';
import '../App.css'
import light from '../assets/light.png'
import Input from './inputbar';
import Button from './button';
import Dropdown from './dropdown';
import logo from '../assets/logo.png'
function Navbar({ taskArray,theme1 }) {
    const [theme,setTheme] = useState('Light')
    // priority array to show priority for tasks
    const priorityOptions = ["High", "Medium", "Low"]
    // main task array for storing all tasks
    // const [tasks,setTasks] = useState({})
    // // use effect for passing array to the parent component as soon as it changes
    // useEffect(()=>{
    // },[tasks])
    //function for converting tasks into object
    function converToObject(taskInput,priority,category){
        let obj = {
            "id": Date.now(),
            "title":taskInput,
            "category":category,
            "priority":priority,
            "done":false
        }
        return obj
    }
    // final function to add task into array
    function addBtn() {
        if (taskInput ==="" || priority===null || category ===null){
            alert("Please complete all the fields")
        }
        else{
            const task = converToObject(taskInput,priority,category)
            taskArray(task)
            setInput('');
            setCategory("")
            setPriority("")
        }
    }
    
    // main task input handler
    const [taskInput, setInput] = useState('')
    function handleChange(e) {
        setInput(e.target.value)
    }
    // priority input handler
    const [priority, setPriority] = useState("")
    function handlePriority(e) {
        setPriority(e.target.value)
    }
    // for setting category value
    const [category, setCategory] = useState("")
    function handleCategory(e) {
        let input = e.target.value
        setCategory(input)
    }
    // array for all the categories to be displayed in dropdown
    const [categoryArray,setCategoryArray] = useState(()=>{
        const category = JSON.parse(localStorage.getItem('category')) || []
        return category
    })
    useEffect(()=>{
        localStorage.setItem('category',JSON.stringify(categoryArray))
    },[categoryArray])
    // boolean for switching between dropdown and add category
    const [addCategory, setAddCategory] = useState(false)
    // input for custom category
    const [catInput , setCatInput] = useState('')
    function catChange(e){
        setCatInput(e.target.value)
    }
    // handling custom category save  button
    function handleSave(){
        if(catInput.trim() === ""){
            alert("Please enter a category")
        }else{
            setCategoryArray([...categoryArray,catInput])
            setCategory(catInput);
            setAddCategory(false)
            setCatInput('')
        }  
    }
    //function for handling save button
    function handleCancel(){
        setAddCategory(false)
        setCatInput('')
    }
    function changeTheme(){
        setTheme(theme === "Light" ? "Dark" : "Light")
    }
    useEffect(()=>{theme1(theme)},[theme])
    return (
        <div className= {`navbar ${theme}`} >
            <div className="logo">
                <img src={theme === "Light" ? light : logo} alt="" />
            </div>
            <div className="searchBar">
                <Input placeholder="Write your task here" class="searchbarInput" onchange={handleChange} value={taskInput} />
                <Dropdown options={priorityOptions} class="priority dark" type="Priority" onchange={handlePriority} type1="Priority" value={priority}/>
                {!addCategory ? <div style={{ display: "inline" }}>
                    <Dropdown options={categoryArray} name="categories" class="categories dark" value={category} type="Category" onchange={handleCategory} type1="Category"/>
                    <Button name="Add category" class="addctg darkbtn" onclick={()=>{setAddCategory(true)}} />
                </div>
                : <div style={{ display: "inline" }}>
                    <Input placeholder="Type Category" class="inputCategory" onchange={catChange}/>
                    <Button name="Save" class="addctg darkbtn" onclick={handleSave} style={{width:'91px'}}/>
                    <Button name="Cancel" class="addctg darkbtn" onclick={handleCancel} style={{width:'91px'}}/>
                </div>}
                <Button name="Add" class="addBtn darkbtn" onclick={addBtn}/>
            </div>
            <div className='toggle'>
                <Button name={theme} class="thmBtn darkbtn" onclick={changeTheme}/>
            </div>
        </div>
    )
}
export default Navbar;
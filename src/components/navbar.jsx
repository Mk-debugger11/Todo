import '../App.css'
import light from '../assets/light.png'
import Input from './inputbar';
import Button from './button';
import Dropdown from './dropdown';
function Navbar(){
    const priorityOptions = ["High","Medium","Low"]
    const categories = []
    return(
        <div className="navbar">
            <div className="logo">
                <img src={light} alt="" />
            </div>
            <div className="searchBar">
                <Input placeholder = "Write your task here" class="searchbarInput"/>
                <Dropdown options={priorityOptions} class="priority" type="Priority"/>
                <Dropdown options={categories} name="categories" class="categories" type="Category"/>
                <Button name = "Add" class="addBtn"/>
            </div>
            <div className='toggle'>
                <Button name = "Dark" class="thmBtn"/>
            </div>
        </div>
    )
}
export default Navbar;
import { useState, useEffect } from 'react';
import '../App.css'
import edit from '../assets/edit.png'
import trash from '../assets/trash.png'
import Button from './button';
import Input from './inputbar';
import Dropdown from './dropdown';
import usetaskStore from '../store/zustandStore';
function Card(props) {
    const editTask = usetaskStore(state => state.editTask)
    const priorityOptions = ["High", "Medium", "Low"]
    const [priority, setPriority] = useState(props.priority)
    const [color, setColor] = useState('')
    function Color() {
        if (priority === "High") {
            setColor("high")
        }
        else if (priority === "Medium") {
            setColor("medium")
        }
        else if (priority === "Low") {
            setColor("low")
        }
    }
    useEffect(Color, [priority])
    const [newTitle, setNewTitle] = useState(props.title);
    return (
        <div className={`cardParent ${props.doneCard} ${props.theme}`}>
            <div className="checkbox">
                <Input type="checkbox" onchange={props.onchange} />
            </div>
            <div className={`card ${props.doneCard}`}>
                <div className="left">
                    {props.edit1 ?
                        <div>
                            <Input onchange={(e) => { setNewTitle(e.target.value) }}
                                value={newTitle}
                                class="editInput"
                            />
                            <Button name="save" class="addctg" onclick={() => { 
                                editTask(props.id, newTitle, priority)
                                props.handleEdit
                            }} />
                        </div>
                        : <div className="title">{props.title}</div>}
                    <div className="category">{props.category}</div>
                </div>
                <div className="right">
                    {props.edit1 ?
                        <div><Dropdown options={priorityOptions} value={priority} onchange={(e) => { setPriority(e.target.value) }} /></div>
                        : <div className={`pri ${color}`}>{props.priority}</div>}

                    <div className="crud">
                        <div className="edit"><Button name={<img src={edit} alt="" />} onclick={props.editClick} class="editBtn" /></div>
                        <div className="delete"><Button name={<img src={trash} alt="" />} onclick={props.deleteClick} class="editBtn" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
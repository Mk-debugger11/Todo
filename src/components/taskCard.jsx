import { useState, useEffect } from 'react';
import '../App.css'
import edit from '../assets/edit.png'
import trash from '../assets/trash.png'
import Button from './button';
import Input from './inputbar';
function Card(props) {
    const [color, setColor] = useState('')
    function Color() {
        if (props.priority === "High") {
            setColor("high")
        }
        else if (props.priority === "Medium") {
            setColor("medium")
        }
        else if (props.priority === "Low") {
            setColor("low")
        }
    }
    useEffect(Color, [])
    return (
        <div className={`cardParent ${props.doneCard}`}>
            <div className="checkbox">
                <Input type="checkbox" />
            </div>
            <div className={`card ${props.doneCard}`}>
                <div className="left">
                    <div className="title">{props.title}</div>
                    <div className="category">{props.category}</div>
                </div>
                <div className="right">
                    <div className={`pri ${color}`}>{props.priority}</div>
                    <div className="crud">
                        <div className="edit"><Button name={<img src={edit} alt="" />} class="editBtn" /></div>
                        <div className="delete"><Button name={<img src={trash} alt="" />} class="editBtn" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
function Input(props){
    return <input type={props.type} placeholder={props.placeholder} onChange={props.onchange} className={props.class} value={props.value}/>
}
export default Input;
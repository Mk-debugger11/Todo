import Button from "./button"
function Dropdown(props) {
    const options = props.options
    return (
        <select name={props.name} className={props.class} onChange={props.onchange} value={props.value}>
            <option value="">{props.type1}</option>
            {options.map((ele, index) => {
                return <option key={index} value={ele}>{ele}</option>
            })}
        </select>

    )
}
export default Dropdown
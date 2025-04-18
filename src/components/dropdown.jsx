import Button from "./button"
function Dropdown(props) {
    const options = props.options
    return (
        <select name={props.name} className={props.class}>
            <option value={null}>{props.type}</option>
            {options.map((ele, index) => {
                return <option key={index} value={ele}>{ele}</option>
            })}
        </select>

    )
}
export default Dropdown
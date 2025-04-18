import '../App.css'
function Card(props) {
    return (
        <div className="card">
            <div className="left">
                <div className="title">{props.title}</div>
                <div className="category">{props.category}</div>
            </div>
            <div className="right">
                <div className="pri">{props.priority}</div>
                <div className="crud">
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
            </div>
        </div>
    )
}
export default Card;
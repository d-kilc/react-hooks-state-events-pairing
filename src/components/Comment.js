export default function Comment(props) {
    return (
        <div class="container">
            <h3>{props.user}</h3>
            <p>{props.comment}</p>
        </div>
    )
}
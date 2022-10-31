export function Post(props) {
    return (
        <div>
            <strong><sup>*</sup>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}
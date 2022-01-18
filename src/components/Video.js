import { useState } from 'react'
export default function Video(props) {
    const [upvotes, setUpvotes] = useState(props.upvotes)
    const [downvotes, setDownvotes] = useState(props.downvotes)

    function handleUpvote(e) {
        setUpvotes(upvotes + 1)
    }

    function handleDownvote(e) {
        setDownvotes(downvotes + 1)
    }
    
    return (
        <div class="container">
            <iframe
            width="80%"
            height="525"
            align="center"
            src={props.url}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{props.title}</h1>
            <p>{`${props.views} views | Uploaded ${props.createdAt}`}</p>
            <button onClick={handleUpvote}>{`${upvotes} 👍`}</button>
            <button onClick={handleDownvote}>{`${downvotes} 👎`}</button>
        </div>
    )
}
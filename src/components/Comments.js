import { useState } from 'react'
import Comment from './Comment'
export default function Comments(props) {

    
    const [commentsVisible, setCommentsVisible] = useState(true)
    
    function handleToggle(e) {
        setCommentsVisible(!commentsVisible)
        const comments = document.querySelector('#comments')
        comments.style.display === 'none' ?
            comments.style.display = 'block'
        :   comments.style.display = 'none'
    }

    return(
        <div class="container">
            <button onClick={handleToggle}>{commentsVisible ? 'Hide Comments' : 'Show Comments'}</button>
            <hr/>
            <div id="comments">
                <h2>{`${props.comments.length} Comments`}</h2>
                {props.comments.map((comment) => <Comment key={comment.id} user={comment.user} comment={comment.comment}/>)}
            </div>
        </div>
    )
}
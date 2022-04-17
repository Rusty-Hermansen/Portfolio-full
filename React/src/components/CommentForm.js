import {useState} from 'react';
import commentService from '../Services/commentService';

const CommentForm = () => {
    const [comment, setComment] = useState('');

    const commentChangedHandler = (e) => {
        setComment(e.target.value)
    }

    const onCommentSubmit = (e) => {
        e.preventDefault();
        commentService.addNewComment(comment);
        setComment('');
    }


    return(
        <form onSubmit={onCommentSubmit}>
                    <label>Please make your comments here:</label>
                    <input type='text' onChange={commentChangedHandler} />
                    <button type="submit">Submit Comment</button>
                </form> 
    )
}

export default CommentForm;
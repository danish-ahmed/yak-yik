import React, {Component} from 'react';

const Comment = (props) => {
    return(
        <div className="column">
            <div className="column box">
                <h2 className="is-size-3 has-text-default"> {props.currentComment.username} </h2>
                {/*<span className="has-text-info">{props.currentComment.comment} comments</span> <br />*/}
                <span>{props.currentComment.body}</span>
            </div>
        </div>
    )
}
export default Comment;
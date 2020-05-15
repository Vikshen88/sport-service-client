import React from "react";
import './comment-item.css'

const CommentItem = ({comment}) => {
    return (
        <div className="media-object comment-item comment">
            <div className="media-object-section">
                <h5 className="name">{comment.user.username}</h5>
                <p>{comment.content}</p>
                <p className="meta">
                    <small>{comment.date}</small> |
                </p>
            </div>
        </div>
    )
};
export default CommentItem;
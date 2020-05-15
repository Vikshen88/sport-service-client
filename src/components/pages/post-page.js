import React from "react";
import PostDetailsContainer from "../post-details/post-details";
import CommentListContainer from "../comment-list"
import CommentForm from "../comment-form";

const PostPage = ({id}) => {

    return (
        <div>
            <PostDetailsContainer id={id}/>
            <CommentForm/>
            <CommentListContainer id={id}/>
        </div>

    )

};

export default PostPage
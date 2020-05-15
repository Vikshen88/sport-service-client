import React from "react";
import './post-item.css'
import {Link} from "react-router-dom";
var images = require.context('../../images', true);


const PostItem = ({ post }) => {

    let img_src = images(post.image);

    return (
        <div className="article thumbnail" key={post.id}>
            <Link to={`/article/${post.id}`}>
                <img src={img_src}
                     alt={post.id}/></Link>
            <div className="data">
                <h3><Link t={`/article/${post.id}`}>{post.namePost}</Link>
                </h3>
                <hr/>
                <div className="desc">
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
    )
};

export default PostItem;
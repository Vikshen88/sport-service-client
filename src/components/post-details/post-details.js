import React, {Component} from "react";
import './post-details.css';
import {fetchPost} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { Player } from "video-react"
import "../../../node_modules/video-react/dist/video-react.css";
var images = require.context('../../images', true);
var videos = require.context('../../videos', true)


const PostItemDetails = ({post}) => {


    let img_src = images(post.image);
    let video_src = videos(post.match.video);
    return (
        <div className="article thumbnail">

            <div className="data">
                <Player
                    poster={img_src}
                    src={video_src}
                />
                <h3>{post.namePost}</h3>
                <ul className="vertical large-horizontal menu">
                    <li><i className="fi-folder"></i>{post.match.category.nameCategory}</li>
                    <li><i className="fi-clock"></i>{post.date.slice(0, post.date.length-9)}</li>
                </ul>
                <div className="content">
                   {post.description}
                </div>

            </div>
        </div>
    )
}


class PostDetailsContainer extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    render() {

        const {post, loading, error} = this.props;

        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorIndicator/>
        }

        return <PostItemDetails post={post}/>

    }
}

const mapStateToProps = ({postItem: {post, loading, error}}) => {
    return {
        post: post,
        loading: loading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {sportService, id} = ownProps;
    return {
        fetchPost: () => dispatch(fetchPost(sportService, id)())
    }
};

export default withSportService()(connect(mapStateToProps,mapDispatchToProps)(PostDetailsContainer))

import React, {Component} from "react";
import './post-details.css';
import {fetchPost} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
var images = require.context('../../images', true);


const PostItemDetails = ({post}) => {

    let img_src = images(post.image);
    return (
        <div className="article thumbnail">
            <img src={img_src}
                 alt={post.id}/>
            <div className="data">
                <h3>{post.namePost}</h3>
                <ul className="vertical large-horizontal menu">
                    <li><i className="fi-folder"></i><a href="#">Phasellus</a></li>
                    <li><i className="fi-comments"></i>14 comments</li>
                    <li><i className="fi-clock"></i>7 Sep 2015, 7:47</li>
                    <li><i className="fi-eye"></i>Hits: {post.hits}</li>
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

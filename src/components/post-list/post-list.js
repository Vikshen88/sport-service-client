import React, {Component} from "react";
import "./post-list.css"
import PostItem from "../post-item";
import {fetchPosts} from "../../actions";
import withSportService from "../hoc"
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const PostList = ({posts}) => {
    return (
        <div id="mainContent" className="col-10">
            {posts.map((post) => {
                return <PostItem post={post}/>
            })}
        </div>
    )
};

class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.category !== this.props.category) {
            this.props.fetchPosts();
        }
    }

    render() {

        console.log(this.props, 'PROPS POST');
        const {posts, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <PostList posts={posts}/>
    }
}

const mapStateToProps = ({postList: {posts, loading, error}}) => {
    return {
        posts: posts,
        loading: loading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const {sportService, category} = ownProps;
    return {
        fetchPosts: () => dispatch(fetchPosts(sportService, category)())
    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(PostListContainer));
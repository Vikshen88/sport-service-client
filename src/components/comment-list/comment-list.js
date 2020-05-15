import React, {Component} from 'react';
import {fetchComments, loadMoreComments} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";
import Spinner from "../spinner";

import CommentItem from "../comment-item";
import CommentForm from "../comment-form";

const CommentList = ({visible, comments, loadMore}) => {
    return (
        <div id="comments-list-container">
            <h3>Коментарии</h3>
            {comments.slice(0, visible).map((comment) => {
                return <CommentItem comment={comment}/>
            })}

            {visible < comments.length ?
                <button onClick={loadMore} type="button" className="load-more btn btn-primary">Загрузить еще</button> : ''}
        </div>
    )
};

class CommentListContainer extends Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {

        const {comments, visible, loading, error, loadMore} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <p>Ваш комметарий - первый</p>
        }

        return (
            <CommentList comments={comments} visible={visible} loadMore={loadMore}/>
        )


    }


}

const mapStateToProps = ({commentList: {comments, visible, loading, error}}) => {
    return {
        comments: comments,
        visible: visible,
        loading: loading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id, sportService} = ownProps;
    return {
        fetchComments: () => dispatch(fetchComments(sportService, id)()),
        loadMore: () => dispatch(loadMoreComments())
    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(CommentListContainer))
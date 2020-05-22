import React, {Component} from "react";
import withSportService from "../hoc";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import './comment-form.css'
import {sendNewComment, userRequest} from "../../actions";

class CommentForm extends Component {

    state = {
        comment: ''
    };

    componentDidMount() {
        this.props.getUser();
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({comment: value});
    };

    render() {
        if(this.props.user === null) {
            return (
                <div className="notification">
                    <p>Чтобы написать комментарий - войдите в систему</p>
                    <Link to={"/login"}>Войти в систему</Link>
                </div>
            )
        }
        console.log(this.props.user, this.props.post , "COMMENT FORM");
        return (
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        const {comment} = this.state;
                        if (comment) {
                            this.props.addComment(comment, this.props.user, this.props.post)
                        }
                        this.setState({
                            comment: ''
                        });
                    }}>
                    <div id="new-comment-container" className="media-object comment-item new-comment">
                        <div className="media-object-section">
                        </div>
                        <div className="media-object-section" style={{width: "100%"}}>
                            <textarea id="comment-content" name="comment-content" placeholder="Type a new comment" value={this.state.comment} onChange={this.handleChange}>Место для вашего мнения</textarea>
                            <button className="float-right button" style={{margin: "10px"}}>Отправить</button>
                        </div>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = ({userInfo: {user}, postItem: {post}}) =>{
    return {
        user: user,
        post: post
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {sportService} = ownProps;
    return {
        addComment: (comment, user, post) => dispatch(sendNewComment(sportService, comment, user, post)()),
        getUser:() => dispatch(userRequest())
    }
};

export default withSportService()(connect(mapStateToProps,mapDispatchToProps)(CommentForm));
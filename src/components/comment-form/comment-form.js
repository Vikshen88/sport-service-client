import React, {Component} from "react";
import withSportService from "../hoc";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import './comment-form.css'

class CommentForm extends Component {

    render() {

        if(this.props.user !== null) {
            return (
                <div className="notification">
                    <p>Чтобы написать комментарий - войдите в систему</p>
                    <Link to={"/login"}>Войти в систему</Link>
                </div>
            )
        }

        return (
                <div id="new-comment-container" className="media-object comment-item new-comment">
                    <div className="media-object-section">
                    </div>
                    <div className="media-object-section" style={{width: "100%"}}>
                        <textarea id="comment-content" name="comment-content" placeholder="Type a new comment">Место для вашего мнения</textarea>
                        <button className="float-right button" style={{margin: "10px"}}>Отправить</button>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = ({userInfo: {user}}) =>{
    return {
        user: user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
};

export default withSportService()(connect(mapStateToProps,mapDispatchToProps)(CommentForm));
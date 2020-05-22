import React, {Component} from "react";
import "./login.css"
import {Link, Redirect} from "react-router-dom";
import {login, userRequest} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    render() {
        const { username, password } = this.state;
        if (this.props.user === null) {
            return (
                <div className="wrapper">
                    <form className="form-signin"
                          onSubmit={(event) => {
                              event.preventDefault();
                              const {username, password} = this.state;
                              if (username && password) {
                                  console.log(username, password, 'Must dispatch');
                                  this.props.loginUser(username, password);
                              }
                          }}>
                        <h2 className="form-signin-heading">Форма авторизации</h2>
                        <input type="text" className="form-control" name="username" value={username} placeholder="Имя пользователя"
                               required=""
                               autoFocus=""
                               onChange={this.handleChange}/>
                        <br/>
                        <input type="password" className="form-control" name="password" value={password} placeholder="Пароль" required=""
                               onChange={this.handleChange}/>
                        <Link to={"/registration"}><h6>Нет аккаунта?</h6></Link>
                        <br/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                    </form>
                </div>
            )
        } else {
            return <Redirect to={"/"}/>
        }

    }
}

const mapStateToProps = ({userInfo: {user}}) => {
    return {
        user: user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const {sportService} = ownProps;

    return {
        loginUser: (username, password) => {
            dispatch(login(sportService, username, password)())
        },

    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(Login))
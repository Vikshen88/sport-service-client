import React, {Component} from "react";
import "./registation.css"
import {addNewUser} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"


class Registration extends Component {

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
        console.log(username, password, 'USER');
        if(this.props.user === null){
            return (
                <div className="wrapper">
                    <form className="form-signin"
                          onSubmit={(event) => {
                              event.preventDefault();
                              const {username, password} = this.state;
                              if (username && password) {
                                  this.props.addUser(username, password);
                              }
                          }}>
                        <h2 className="form-signin-heading">Форма регистрации</h2>
                        <input type="text" className="form-control"  name="username" value={username} placeholder="Имя пользователя"
                               required=""
                               autoFocus=""
                               onChange={this.handleChange}/>
                        <br/>
                        <input type="password" className="form-control" n name="password" value={password} placeholder="Пароль" required=""
                               onChange={this.handleChange}/>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Регистрация</button>
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
        addUser: (username, password) => dispatch(addNewUser(sportService, username, password)())
    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(Registration))
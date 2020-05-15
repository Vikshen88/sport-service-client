import React, {Component} from "react";
import "./login.css"
import {Link} from "react-router-dom";

export default class Login extends Component {

    render () {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Форма авторизации</h2>
                    <input type="text" className="form-control" name="username" placeholder="Имя пользователя" required=""
                           autoFocus=""/>
                    <br/>
                    <input type="password" className="form-control" name="password" placeholder="Пароль" required=""/>
                    <Link to={"/registration"}><h6>Нет аккаунта?</h6></Link>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                </form>
            </div>

        )
    }
}
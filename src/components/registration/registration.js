import React, {Component} from "react";
import "./registation.css"
import {Link} from "react-router-dom";

export default class Registration extends Component{

    render() {

        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Форма регистрации</h2>
                    <input type="text" className="form-control" name="username" placeholder="Имя пользователя" required=""
                           autoFocus=""/>
                    <br/>
                    <input type="password" className="form-control" name="password" placeholder="Пароль" required=""/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Регистрация</button>
                </form>
            </div>
        )
    }

}
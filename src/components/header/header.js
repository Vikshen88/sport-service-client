import React from "react";
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="callout primary">
                <div className="row">
                    <div className="large-6 medium-6 columns">
                        <Link to={"/"}><h1>SportService</h1></Link>
                    </div>
                    <div className="large-6 medium-6 columns">
                        <div className="input-group">
                            <input id="Название матча" className="input-group-field" name="query"
                                   placeholder="Введите название матча"
                                   type="text"/>
                            <button className="btn btn-primary" style={{margin: "10px 0 0 0"}}>Найти</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
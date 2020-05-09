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
                        <form action="#" method="get">
                            <div className="input-group">
                                <input id="Название матча" className="input-group-field" name="query" placeholder="Search query"
                                       type="text" />
                                    <div className="btn btn-primary">
                                        <button>Find</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
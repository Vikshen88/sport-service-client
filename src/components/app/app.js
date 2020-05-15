import React from "react";
import {Route, Switch} from 'react-router-dom';
import './app.css'
import Header from "../header";
import Footer from "../footer";

import {MainPage, PostPage} from '../pages'

import Registration from "../registration";
import Login from "../login";


const App = () => {

    return (
        <div>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route path={"/"} component={MainPage} exact/>
                    <Route path={"/login"} component={Login}  />
                    <Route path={"/registration"} component={Registration} />
                    <Route path={"/:category?"} component={MainPage} exact/>
                    <Route path={"/article/:id"} render={({match}) => {
                        const {id} = match.params;
                        return <PostPage id={id}/>
                    }} exact/>

                </Switch>
            </div>
            <Footer/>
        </div>

    )
};

export default App;
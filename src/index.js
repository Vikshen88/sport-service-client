import React from "react";
import ReactDOM from 'react-dom'
import App from "./components/app";
import store from "./store";
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import {SportServiceProvider} from "./components/sport-service-context";
import SportService from "./services/sport-service";

const sportService = new SportService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <SportServiceProvider value={sportService}>
                <Router>
                    <App/>
                </Router>
            </SportServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);  
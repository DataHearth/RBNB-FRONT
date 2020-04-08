import React, { Component } from 'react';
import {BrowserRouter, Router, Link, Route, Switch} from "react-router-dom";

import Home from "./Home";
import SingUp from "./SingUp";

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Route component={Home} exact  path="/" />
                    <Route component={SingUp} exact  path="/SingUp" />
            </BrowserRouter>
        );
    }
}

export default Root;
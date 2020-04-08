import React, { Component } from 'react';
import {BrowserRouter, Router, Link, Route, Switch} from "react-router-dom";

import Home from "./Home";

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Route component={Home} path="/" />
            </BrowserRouter>
        );
    }
}

export default Root;
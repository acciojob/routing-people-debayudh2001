import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import User from "./components/User";



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users/:id" component={User} />
        </Switch>
    </BrowserRouter>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./views/Home";
import Login from "./views/Login";
import Relatives from "./views/Relatives";
import Plan from "./views/Plan";
import Ending from "./views/Ending";


const App = () => {
    return (
        <div className="container">
            <Router>
                <Home path="/" />
                <Login path="/login" />
                <Relatives path="/add-relatives" />
                <Plan path="/select-plan" />
                <Ending path="/thank-you" />
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
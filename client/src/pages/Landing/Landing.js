import React, { Component } from "react";
import { Link } from "react-router";

import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";

class Landing extends Component {
render() {
    return (
        <div>
            <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <Jumbotron />
            </div>
            </div>
            <Footer />
            </div>
            </div>
    );
    }
}

export default Landing;
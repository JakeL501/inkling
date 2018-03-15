// export {default} from "./User/User.js";
// export {default} from "./InkSpire/inkSpire.js";
// export {default} from "./Styles/inkStyles.js";

// export {default} from "./Inkers/Artist.js";
// export {default} from "./Skins/Client.js";

import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";

// import Panel from "./components/Panel/Panel";
// import Carousel from "./components/Carousel/Carousel";
// import Modal from "./components/Modal-lisu/Modal-lisu";

import Footer from "../components/Footer/Footer";

export default class Index extends React.Component {
    render() {
        const { location } = this.props;
        const containerStyle = {
          marginTop: "60px"
        };
        console.log("layout");
        return (
          <div>
    
            <Navbar location={location} />
    
            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                 <Jumbotron />
    
                  {this.props.children}
    
                </div>
              </div>
              <Footer/>
            </div>
          </div>
    
        );
      }
    }
    
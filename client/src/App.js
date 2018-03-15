// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Panel from "./components/Panel/Panel";
// import Carousel from "./components/Carousel/Carousel";
// import Modal from "./components/Modal-lisu/Modal-lisu";
// import InkBuild from "./components/Ink-build/Ink-build";
// import InkStyles from "./components/InkStyles/InkStyles";
// import Collapse from "./components/Collapse/Collapse";
// import SignIn from "./components/SignIn/SignIn";
// import BuiltInk from "./components/Built-Ink/Built-Ink";
// import Profile from "./components/Profile/Profile";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";

import App from "./App";

import Inkling from "./pages/index.js";
import UserProfile from "./pages/User"
import InkSpire from "./pages/InkSpire";
import Styles from "./pages/Styles";
import Inkers from "./pages/Inkers";
import Skins from "./pages/Skins";



const app = document.getElementById('app');

ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
        <Route component={Inkling}></Route>
        <Route component={UserProfile}></Route>
        <Route path="inkStyle(/:style)" name="inkStyle" component={Styles}></Route>
        <Route path="inkSpire" name="inkSpire" component={InkSpire}></Route>
        <Route path="inkers" name="inklingInker" component={Inkers}></Route>
        <Route path="skins" name="inklingSkin" component={Skins}></Route>
      </Route>
    </Router>,
  app);

ReactDOM.render(<App />, document.getElementById("root"));


// const App = () => (
//   <div className="container">
//     <Navbar />
//     <br></br>
//     <Profile />
//     <br></br>
//     <BuiltInk />
//     <br></br>
//     {/* <SignIn /> */}
//     <Modal />
//     <br></br>
//     <Jumbotron />
//     <br></br>
//     <Panel />
//     <br></br>
//     <Collapse />
//     <br></br>
//     <InkBuild />
//     <br></br>
//     <Carousel />
//     <br></br>
//     <InkStyles />
    
//   </div>
// );

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/index";
import BuiltInk from "/pages/Built-Inklings";
import Client from "/pages/Client";
import Profile from "/pages/Styles";
import Detail from "/pages/Detail";
import NoMatch from "/pages/NoMatch";
import  Navbar  from "components/Navbar";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Panel from "./components/Panel/Panel";
// import Carousel from "./components/Carousel/Carousel";
// import Modal from "./components/Modal-lisu/Modal-lisu";
// import InkBuild from "./components/Ink-build/Ink-build";
// import InkStyles from "./components/Ink-Styles/Ink-Styles";
// import Collapse from "./components/Collapse/Collapse";
// import SignIn from "./components/SignIn/SignIn";
// import BuiltInk from "./components/Built-Ink/Built-Ink";
// import Profile from "./components/Profile/Profile";

const App = () => (
  // <div className="container">
  <Router>
    <div>
    <Navbar />
    {/* <SignIn /> */}
    <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Styles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    {/* <Modal />
    <Jumbotron />
    <Carousel />
    <Panel />
    <InkBuild />
    <InkStyles />
    <Collapse />
    <BuiltInk />
    <Profile /> */}
  </div>
  </Router>
  // </div>
);

export default App;

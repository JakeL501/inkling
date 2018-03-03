import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal-lisu";
import InkBuild from "./components/Ink-build";
import InkStyles from "./components/Ink-Styles";
import Collapse from "./components/Collapse";
import SignIn from "./components/SignIn";

const App = () => (
  <div className="container">
    <Navbar />
    <SignIn />
    <Modal />
    <Jumbotron />
    <Carousel />
    <Panel />
    <InkBuild />
    <InkStyles />
    <Collapse />
  </div>
);

export default App;

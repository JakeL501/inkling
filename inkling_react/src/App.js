import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal-lisu";
import InkBuild from "./components/Ink-build";
import InkStyles from "./components/Ink-Styles";
import Collapse from "./components/Collapse";

const App = () => (
  <div className="container">
    <Navbar />
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

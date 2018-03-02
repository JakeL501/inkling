import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal-lisu";

const App = () => (
  <div className="container">
    <Navbar />
    <Modal />
    <Jumbotron />
    <Carousel />
    <Panel />
  </div>
);

export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Panel from "./components/Panel/Panel";
import Carousel from "./components/Carousel/Carousel";
import Modal from "./components/Modal-lisu/Modal-lisu";
import InkBuild from "./components/Ink-build/Ink-build";
import InkStyles from "./components/Ink-Styles/Ink-Styles";
import Collapse from "./components/Collapse/Collapse";
import SignIn from "./components/SignIn/SignIn";
import BuiltInk from "./components/Built-Ink/Built-Ink";
import Profile from "./components/Profile/Profile";
import InkHuntBtn from "./components/InkHuntBtn/InkHuntBtn"


const App = () => (
  <div className="container">
    <Navbar />
    <Collapse />
    <Jumbotron />
    
    <InkHuntBtn />
    {/* <SignIn /> */}
    <p>    </p>
    <Modal />
    <Carousel />
    <Panel />
    <InkBuild />
    <InkStyles />
    <BuiltInk />
    <Profile />
  </div>
);

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"

import Landing from "./pages/Landing";
// import UserProfile from "./pages/User"
// import InkSpire from "./pages/InkSpire";
import Styles from "./pages/Styles";
import Inkers from "./pages/Inkers";
import Skins from "./pages/Skins";


const App = () => (
    <Router>
      <div>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/Styles" component={Styles} />

              {/* <Route exact path="/inkSpire" component={InkSpire} /> */}
              <Route exact path="/inkers" component={Inkers} />
              <Route exact path="/skins" component={Skins} />

        </ Switch>
      </div>
    </ Router>
);

export default App;

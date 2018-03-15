import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";

import App from "./App";

import Inkling from "./pages/index.js";
import UserProfile from "./pages/User"
import InkSpire from "./pages/InkSpire";
import Styles from "./pages/Styles";
import Inkers from "./pages/Inkers";
import Skins from "./pages/Client";



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

// ReactDOM.render(<App />, document.getElementById("root"));

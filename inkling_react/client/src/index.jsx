import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';

class Home extends Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

// More components
class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}

render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/build-ink" component={BuildInk}/>
        <Route path="/inkspiration" component={Inkspiration}/>
        <Route path="/inkspiration" component={Inkers}/>
        <Route path="/inkspiration" component={Skins}/>
        <Route path="/inkspiration" component={Styles}/>
    </Router>,
    document.getElementById('container')
);
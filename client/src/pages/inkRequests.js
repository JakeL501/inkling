// import "./inkRequests.css";
import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import BuiltInk from "../../components/BuiltInk";
import Footer from "../../components/Footer";
// import {Divider, Row, Col, Button, Container} from 'react-materialize'

const App = () => (
    <div className="container">
      <Navbar />
      <br></br>
      <Jumbotron />
      <br></br>
      <BuiltInk />
      <br></br>
      <Footer />
      </div>
);

export default inkRequests;
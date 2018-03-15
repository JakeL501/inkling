// INKSPIRE! => Instagram API

// import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/api;
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

// class InkSpire extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: "",

//     articles: [],
//     savedArticles: [],
//     topic: "",
//     begin: "",
//     end: ""
//   };


//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//       <% include ../partials/head %>
//   </head>
  
//   <body class="container">
  
//       <header>
//           <% include ../partials/header %>
//       </header>
  
//       <main>
  
//           <div class="row">
//                   <div id="instafeed"></div>
//           </div>
  
//           <div class="row">
//               <div class="col-sm-2"></div>
  
//               <% instagram.forEach(function(insta) { %>
//                   <div class="instagram-pic col-sm-3 col-md">
  
//                       <a href="<%= insta.link %>" target="_blank">
//                           <img src="<%= insta.images.standard_resolution.url %>" class="img-responsive">
//                       </a>
  
//                       <div class="instagram-bar">
//                           <div class="likes">
//                               <span class="glyphicon glyphicon-heart"></span>
//                               <%= insta.likes.count %>
//                           </div>
  
//                           <div class="comments">
//                               <span class="glyphicon glyphicon-comment"></span>
//                               <%= insta.comments.count %>
//                           </div>
//                       </div>
  
//                   </div>
//                   <% }); %>
//                       <div class="col-md-2"></div>
//           </div>
  
          
//       </main>
  
//       <footer>
//           <% include ../partials/footer %>
//       </footer>
  
//   </body>
  
//   </html>

// export default InkSpire;

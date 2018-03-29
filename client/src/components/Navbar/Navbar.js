import React from "react";
import { Link } from "react-router-dom";

<img src = { require('./logo-15.png') } alt = "Inkling-Logo" />


  class Navbar extends React.Components {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        loggedIn: false,
        user: {}
      };
    }

    // componentWillMount() {
    //   if (isLoggedIn()) {
    //     let userAud = getUserAud();
    //     let userData = {
    //       aud: userAud
    //     };
    //     this.setState({
    //       user: userData
    //     });
    //     this.setState({
    //       loggedIn: true
    //     });

    //   } else {
    //     this.setState({
    //       loggedIn: false
    //     });
    //   }
    // }

    // handleLogin = () => {
    //   try {
    //     login();
    //   } catch (err) {
    //     console.log(`error logging in: ${err}`);
    //     alert("There was an error logging in");

    //   }
    // }


    // handleLogout = () => {
    //   try {
    //     logout();
    //   } catch (err) {
    //     console.log(`error logging out: ${err}`);
    //     alert("There was an error logging out");
    //   }
    // }

    // handleToggle = () => this.setState({
    //   open: !this.state.open
    // });


    // handleClose = () => {
    //   if (isLoggedIn()) {
    //     this.setState({
    //       open: false,
    //       loggedIn: true
    //     });
    //   } else {
    //     this.setState({
    //       open: false,
    //       loggedIn: false
    //     });
    //   }
    // }

    render() {
      return (

        <div className = "container">
        <div className = "blog-header py-3">
        <div className = "row flex-nowrap justify-content-between align-items-center" >
        <div className = "col-4 pt-1">
        <a className = "text-muted" href = "/user-profile" > Profile </a> 
        </div> <div className = "col-4 text-center" >
        <a className = "blog-header-logo text-dark" href = "/" > Inkling </a> 
        </div> 
        <div className = "col-4 d-flex justify-content-end align-items-center" >
        
        
        <a className = "btn btn-sm btn-outline-secondary" data-target= "#inkling-lisu" href="/handleAuth"> Sign up </a> 
        </div> 
        </div> 
        </div>

        <div className = "nav-scroller py-1 mb-2">
        <nav className = "nav d-flex justify-content-between" >
        <a className = "p-2 text-muted" href = "/About" > About </a>
        <a className = "p-2 text-muted" href = "/Build-Ink" > Build Ink</a>
        <a className = "p-2 text-muted" href = "/Inkspiration"> Inkspiration </a>
        <a className = "p-2 text-muted" href = "/Inkers" > Inkers </a>
        <a className = "p-2 text-muted" href = "/Skins"> Skins </a>
        <a className = "p-2 text-muted" href = "/Styles" > Styles </a> 
        </nav>
        </div>
        </div>
      );
    }
  }

export default Navbar;
import React from "react";

const Navbar = () => (
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#inkling-nav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Inkling</a>
    <div class="collapse navbar-collapse" id="inkling-nav">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="inkling-builder.html">Build Ink</a>
        <a class="nav-item nav-link" href="inkling-hunter.html">Inspiration</a>
        <a class="nav-item nav-link" href="inkling-search.html">Inkers</a>
        <a class="nav-item nav-link" href="inkling-search.html">Skins</a>
        {/* <a class="nav-item nav-link" href="inkling-lisu">Log In</a> */}
      </div>
    </div>
  </nav>
);

export default Navbar;

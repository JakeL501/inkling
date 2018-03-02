import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          Inkling
        </a>
        </div>
{/* Collect the nav links, forms, and other content for toggling */}
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="#">About
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li>
                    <a href="#">Your Next Tattoo</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Find a Skin
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">by Style</a>
                        </li>
                        <li>
                            <a href="#">by Budget</a>
                        </li>
                        <li>
                            <a href="#">by Location</a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li>
                            <a href="#">Tattoo Events</a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li>
                            <a href="#">Tattoo Conventions</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Inkers.</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Find an Artist
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">by Style</a>
                        </li>
                        <li>
                            <a href="#">by Cost</a>
                        </li>
                        <li>
                            <a href="#">by Shop Location</a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li>
                            <a href="#">Browse All</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
    </div>
    {/* <!-- /.container-fluid --> */}
</nav>
);

export default Navbar;

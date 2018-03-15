import React from "react";

const Navbar = () => (

      <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="/user-profile">Profile</a>
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#">Inkling</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" data-target="#inkling-lisu" href="/handleAuth">Sign up</a>
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" href="/About">About</a>
          <a class="p-2 text-muted" href="/Build-Ink">Build Ink</a>
          <a class="p-2 text-muted" href="/inkRequests">Inkspiration</a>
          <a class="p-2 text-muted" href="/Inkers">Inkers</a>
          <a class="p-2 text-muted" href="/Skins">Skins</a>
          <a class="p-2 text-muted" href="/Styles">Styles</a>
        </nav>
      </div>
      </div>
);

export default Navbar;

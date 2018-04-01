import React from 'react';
import { Link } from 'react-router-dom';

// React-Bootstrap horizonal navagation bar 
export default class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg fixed-top site-header py-1">
        <Link class="py-2" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="py-2 d-none d-md-inline-block nav-link" to="/"><i className="fa fa-home fa-2x" aria-label="home logo"></i></Link>
            </li>
            <li class="nav-item vcenter">
              <Link class="py-2 d-none d-md-inline-block nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item vcenter">
              <Link class="py-2 d-none d-md-inline-block nav-link" to="/team">Team</Link>
            </li>
            <li class="nav-item dropdown vcenter">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/projects/web">Web Apps</a>
                <a class="dropdown-item" href="/projects/mobile">Mobile Apps</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item vcenter">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <Link class="py-2 d-none d-md-inline-block nav-link" to="/contact">Contact</Link>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
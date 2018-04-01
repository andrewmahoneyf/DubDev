import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../images/logo.svg';


// React-Bootstrap horizonal navagation bar 
export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top site-header py-1" data-toggle="collapse" data-target="#navbarSupportedContent">
        <Link className="py-2 pl-3" to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <button className="navbar-toggler mr-1" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars" aria-label="toggle"></i>
        </button>

        <div className="collapse navbar-collapse pr-3" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-right">
            <li className="nav-item active">
              <Link className="py-2d-md-inline-block nav-link d-none d-md-block" to={routes.LANDING}><i className="fa fa-home fa-2x" aria-label="home logo"></i></Link>
            </li>
            <li className="nav-item vcenter">
              <Link className="py-2d-md-inline-block nav-link" to={routes.ABOUT}>About</Link>
            </li>
            <li className="nav-item vcenter">
              <Link className="py-2d-md-inline-block nav-link" to={routes.TEAM}>Team</Link>
            </li>
            <li className="nav-item dropdown vcenter">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={routes.WEB_PROJECTS}>Web Apps</Link>
                <Link className="dropdown-item" to={routes.MOBILE_PROJECTS}>Mobile Apps</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item vcenter">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <Link className="py-2 d-none d-md-inline-block nav-link" to={routes.CONTACT}>Contact</Link>
          <form className="form-inline my-2 my-lg-0 mr-4 input-group ml-2 ml-md-0">
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../images/DubDevIconWhite.png';


// React-Bootstrap horizonal navagation bar 
export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top site-header py-1 transparent" data-toggle="collapse" data-target="#navbarSupportedContent">
        <Link className="py-2 pl-3" to={routes.LANDING}><img className="logo" src={logo} alt="logo" width="100" height="40"/></Link>
        <button className="navbar-toggler mr-1" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars" aria-label="toggle"></i>
        </button>
        <div className="collapse navbar-collapse pr-3" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-right pl-2">
            {/* <li className="nav-item pt-md-1">
              <Link className="py-2d-md-inline-block nav-link" to={routes.ABOUT}>About</Link>
            </li> */}
            <li className="nav-item pt-md-1">
              <Link className="py-2d-md-inline-block nav-link" to={routes.TEAM}>Team</Link>
            </li>
            <li className="nav-item pt-md-1">
              <Link className="py-2d-md-inline-block nav-link" to={routes.WEB_PROJECTS}>Portfolio</Link>
            </li>
            {/* //Drodown for when we have mobile apps to display
              <li className="nav-item dropdown pt-2">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={routes.WEB_PROJECTS}>Web Apps</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to={routes.MOBILE_PROJECTS}>Mobile Apps</Link>
              </div>
            </li> */}
          </ul>
          <a className="py-2 d-md-inline-block nav-link float-right pr-0" href="#contact"><button className="btn btn-info my-sm-0" type="submit">Contact</button></a>
        </div>
      </nav>
    );
  }
}
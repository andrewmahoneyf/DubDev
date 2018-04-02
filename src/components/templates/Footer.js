import React from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Scroll from 'react-scroll';
import Contact from '../templates/ContactForm';


// React-Bootstrap horizonal navagation bar 
export default class Footer extends React.Component {
  render() {
    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    return (
      <footer className="container-fluid pt-4">
        <div className="row pb-3" id="contact">
          <div className="col-12 col-md-4 col-lg-6 text-white">
            <a className="row pl-3 top" href="#top" onClick={Scroll.animateScroll.scrollToTop()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
              <p className="top">Back to top</p>
            </a>
            <h1 className="display-4 pt-2 pt-md-5 mt-md-4">Contact Us</h1>
            <p>In need of a new website? Tell us about your project and we will send you a timeline along with our best quote.</p>
            <div className="row pt-2">
              <div className="col-6 text-right">
                <a href="https://twitter.com/?lang=en"><i className="fa fa-linkedin" aria-label="linkedIn logo"></i></a>
                <a href="mailto:info@dubdev.com"><i className="fa fa-envelope" aria-label="email"></i></a>
                <a href="tel:425-210-5809"><i className="fa fa-phone" aria-label="call" ></i></a>
              </div>
              <div className="col-6 text-left">
                <p>4504 16th Ave NE<br />Seattle, WA 98105</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6">
            <Contact />
          </div>
        </div>
        <div className="row bg-dark pb-3">
          <div className="col-12 col-md pt-3">
            <small className="d-block copyright">&copy; DubDev 2017-2018</small>
            <small className="d-block">
              <Link className="pr-2" to={routes.PRIVACY}>Privacy</Link>
              <Link to={routes.TERMS}>Terms</Link>
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

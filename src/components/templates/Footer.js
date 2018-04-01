import React from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Scroll from 'react-scroll';


// React-Bootstrap horizonal navagation bar 
export default class Footer extends React.Component {
  render() {
    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    return (
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <a class="row" href="#top" onClick={Scroll.animateScroll.scrollToTop()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
              <p class="top">Back to top</p>
            </a>
            <a href="https://twitter.com/?lang=en"><i className="fa fa-linkedin" aria-label="twitter logo"></i></a>
            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-label="facebook logo"></i></a>
            <a href="mailto:goalguys@uw.edu"><i className="fa fa-envelope" aria-label="email"></i></a>
            <a href="tel:555-555-5555"><i className="fa fa-phone" aria-label="call" ></i></a>
            <small class="d-block mb-3 text-muted copyright">&copy; DubDev 2017-2018</small>
            <small class="d-block mb-3 text-muted">
              <Link class="text-muted privacy" to={routes.PRIVACY}>Privacy</Link>
              <Link class="text-muted" to={routes.TERMS}>Terms</Link>
            </small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Cool stuff</a></li>
              <li><a class="text-muted" href="/">Random feature</a></li>
              <li><a class="text-muted" href="/">Team feature</a></li>
              <li><a class="text-muted" href="/">Stuff for developers</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/resources">Resource</a></li>
              <li><a class="text-muted" href="/">Resource name</a></li>
              <li><a class="text-muted" href="/">Another resource</a></li>
              <li><a class="text-muted" href="/">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Business</a></li>
              <li><a class="text-muted" href="/">Education</a></li>
              <li><a class="text-muted" href="/">Government</a></li>
              <li><a class="text-muted" href="/">Gaming</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/about">Our Company</a></li>
              <li><a class="text-muted" href="/team">Team</a></li>
              <li><a class="text-muted" href="/locations">Locations</a></li>
              <li><a class="text-muted" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

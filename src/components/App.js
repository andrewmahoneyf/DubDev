import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Route, Link, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Web, Mobile } from './pages/Projects';
import $ from 'jquery'
import '../styles/App.scss';
import '../styles/Fontawesome.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="navigation" role="navigation" >
          <link rel="icon" href="../images/favicon.ico" />
          <Navigation />
        </header>
        <Main />
        <Footer id="footer" role="contentinfo" />
      </div>
    );
  }
}


// React-Bootstrap horizonal navagation bar 
class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg site-header sticky-top py-1">
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

// Main react-router
class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects/web' component={Web} />
          <Route path='/projects/mobile' component={Mobile} />
        </Switch>
      </main>
    );
  }
}

// React-Bootstrap horizonal navagation bar 
class Footer extends React.Component {
  render() {
    $("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    return (
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <a class="row" href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
              <p class="top">Back to top</p>
            </a>
            <a href="https://twitter.com/?lang=en"><i className="fa fa-linkedin" aria-label="twitter logo"></i></a>
            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-label="facebook logo"></i></a>
            <a href="mailto:goalguys@uw.edu"><i className="fa fa-envelope" aria-label="email"></i></a>
            <a href="tel:555-555-5555"><i className="fa fa-phone" aria-label="call" ></i></a>
            <small class="d-block mb-3 text-muted copyright">&copy; DubDev 2017-2018</small>
            <small class="d-block mb-3 text-muted">
              <a class="text-muted privacy" href="/">Privacy</a>
              <a class="text-muted" href="/">Terms</a>
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


export default App;

export { App };
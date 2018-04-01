import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { Web, Mobile } from './pages/Projects';
import Navigation from './templates/Navbar';
import Footer from './templates/Footer';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/Terms'
import PageNotFound from './pages/PageNotFound';
import '../styles/App.scss';
import '../styles/Fontawesome.scss';
import * as routes from '../constants/routes';
import '../jsx/navbar.js';
import '../jsx/smoothScroll.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="navigation" role="navigation" >
          <Navigation />
        </header>
        <Main />
        <Footer id="footer" role="contentinfo" />
      </div>
    );
  }
}

// Main react-router
class Main extends React.Component {
  render() {
    return (
      <main id='top'>
        <Switch>
          <Route exact path={routes.LANDING} component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.TEAM} component={Team} />
          <Route path={routes.CONTACT} component={Contact} />
          <Route path={routes.WEB_PROJECTS} component={Web} />
          <Route path={routes.MOBILE_PROJECTS} component={Mobile} />
          <Route exact path={routes.PRIVACY} component={Privacy}/>
          <Route exact path={routes.TERMS} component={Terms}/>
          <Route exact path={routes.NOT_FOUND} component={PageNotFound}/>
          <Redirect to={routes.NOT_FOUND}/>
        </Switch>
      </main>
    );
  }
}
import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { Web, Mobile } from './pages/Projects';
import Navigation from './templates/Navbar';
import Footer from './templates/Footer';
import '../styles/App.scss';
import '../styles/Fontawesome.scss';


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
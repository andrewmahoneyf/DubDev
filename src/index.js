import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css'; 
import './styles/index.scss';
import ScrollToTop from './jsx/scrollTop';
import "animate.css/animate.min.css";
import WOW from 'wow.js/dist/wow.min.js';
import ReactGA from "react-ga";

ReactGA.initialize('UA-117108905-1');

var wow = new WOW(
  {
    mobile: false
  });
  wow.init();

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();




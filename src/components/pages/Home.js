import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../images/DubDevLogo.png';
import background from "../../images/headerBackground.png";
import Footer from "../templates/Footer";
import code from "../../images/code.jpg";
import coinglomerate from "../../images/projects/coinglomerate.png";
import bigs from "../../images/projects/bigscontracting.png";
import steppir from "../../images/projects/newsletter.png";
import work from "../../images/working.jpeg";
import native from "../../images/react_native.jpeg";
import web from "../../images/web.png";
import Founders from "../templates/Founders";


export default class Home extends React.Component {
    render() {
        const headerStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            top: "0"
        };

        return (
            <div className="home bg-dark">
                <section className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" style={headerStyle} id="head">
                    <div className="col-md-8 p-4 mx-auto my-5 headline box-shadow rounded animated fadeIn">
                        <img src={logo} alt="logo" className="w-100" />
                        <p className="lead font-weight-normal">Affordable websites for small businesses in the Seattle &amp; Bellevue area</p>
                        <a className="btn btn-outline-secondary btn-block btn-lg box-shadow" href="#contact">
                            Get a quote
                        </a>
                    </div>
                </section>
                <div className="body">
                    <section>
                        <Intro />

                        <Promise />

                        <Applications />

                        <Portfolio />

                        <div className="founders">
                            <h1 className="display-4 pt-md-5 pb-2">Meet Our Founders</h1>
                            <Founders />
                        </div>
                    </section>

                    <section className="homeFooter" id="test">
                        <Footer />
                    </section>
                </div>
            </div>
        );
    }
}



class Intro extends React.Component {
    render() {
        return (
            <div className="page-section clearfix pb-3">
                <div className="container">
                    <div className="intro pt-3 pt-md-5">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={code} alt="code" />
                        <div className="intro-text left-0 text-center bg-faded p-2 p-md-4 rounded box-shadow">
                            <h2 className="section-heading mb-2 mb-md-4">
                                <span className="section-heading-upper">Budget friendly</span>
                                <span className="section-heading-lower">Custom Websites</span>
                            </h2>
                            <p className="mb-3 d-none d-sm-block">Whether you need a completely new site built for you or just some updates to your current one, we can do it all! We specialize in React development but have all of the bases covered.</p>
                            <div className="intro-button mx-auto">
                                <Link className="btn btn-info box-shadow zoom" to={routes.ABOUT}>About our company</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Promise extends React.Component {
    render() {
        return (
            <div className="page-section cta ml-md-3 mr-md-3 bg-teal rounded box-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner text-center rounded box-shadow">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Your Application</span>
                                    <span className="section-heading-lower">Your Way</span>
                                </h2>
                                <p className="mb-0">When you send us your ideas and needs, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, an excellent application.
                                                    You can request a specific platform such as WordPress, Drupal, or React, or we can easily help decide the best fit for your needs.
                                                    If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Applications extends React.Component {
    render() {
        const pStyle = {
            textAlign: 'center',
            width: '80%',
            height: '300px',
            borderradius: '21px 21px 0 0'
        };
        return (
            <div className="d-md-flex flex-md-equal w-100 pb-3 pb-md-5 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 pb-5 text-center text-white overflow-hidden rounded box-shadow">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Web Applications</h2>
                        <p className="lead">You name the website and design, we can build it.</p>
                    </div>
                    <a className="bg-faded box-shadow mx-auto" style={pStyle}>
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded inherit animated infinite pulse" src={web} alt="web" />
                    </a>
                </div>
                <div className="bg-faded mr-md-3 pt-3 px-3 pt-md-5 px-md-5 pb-5 text-center overflow-hidden rounded box-shadow">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Mobile Applications</h2>
                        <p className="lead">Powerful React Native apps for iOS &amp; Android.</p>
                    </div>
                    <a className="bg-dark box-shadow mx-auto" style={pStyle} href="https://facebook.github.io/react-native/" target="_blank" rel="noopener noreferrer">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded inherit box-shadow animated infinite pulse" src={native} alt="mobile" />
                    </a>
                </div>
            </div>
        );
    }
}




class Portfolio extends React.Component {
    render() {
        return (
            <div className="content-section pb-3 pt-2" id="portfolio">
                <div className="container-fluid">
                    <div className="content-section-heading text-center">
                        <Link to={routes.PORTFOLIO}><h1 className="text-secondary mb-0">Portfolio</h1></Link>
                        <h2 className="display-4">Recent Projects</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6 p-md-1 p-xl-3">
                            <a className="portfolio-item rounded" href="https://coinglomerate.co" target="_blank" rel="noopener noreferrer">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Coinglomerate</h2>
                                        <p className="mb-0">A classic single-page web app built for an upcoming blockchain company.</p>
                                    </span>
                                </span>
                                <img className="img-fluid" src={coinglomerate} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 p-md-1 p-xl-3">
                            <a className="portfolio-item rounded" href="https://bigscontracting.com" target="_blank" rel="noopener noreferrer">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Big's Contracting Agency</h2>
                                        <p className="mb-0">A powerful React app integrated with Firebase<span className="d-none d-lg-inline"> for authentication, cloud storage, and firestore database</span>.</p>
                                    </span>
                                </span>
                                <img className="img-fluid" src={bigs} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 p-md-1 p-xl-3">
                            <a className="portfolio-item rounded" href="https://andrewmahoneyf.github.io/SteppIR-Newsletter/" target="_blank" rel="noopener noreferrer">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>SteppIR Communication Systems</h2>
                                        <p className="mb-0">An email newsletter we created for SteppIR<span className="d-none d-lg-inline"> along with monitoring their beautiful WordPress site</span>.</p>
                                    </span>
                                </span>
                                <img className="img-fluid" src={steppir} alt="" />
                            </a>
                        </div>
                        <div className="col-md-6 p-md-1 p-xl-3">
                            <Link className="portfolio-item view-more rounded" to={routes.PORTFOLIO}>
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>View More</h2>
                                        <p className="mb-0">Check out our constantly growing client list on our portfolio!</p>
                                    </span>
                                </span>
                                <img className="img-fluid" src={work} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
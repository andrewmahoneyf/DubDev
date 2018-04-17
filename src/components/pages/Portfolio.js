import React from 'react';


export default class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio bg-light">
                <div className="jumbotron p-3 mb-3 mb-md-5  bg-black box-shadow">
                    <div className="col-md-6 px-0 container">
                        <h1 className="display-4 pt-md-4">Our Clients</h1>
                        <p className="lead my-3 text-white">DubDev provides small businesses with an affordable option for web development and hosting.
                                                 We specialize in and prefer React development but we can do it all.
                                                 Already have a website but need updates? <a href="#contact">Contact us below!</a></p>
                    </div>
                </div>
                {/*<div className="slideshow mb-5">
                    <div className="mover"></div>
                </div> */}
                <Clients />
                <WebProjects />
            </section>
        );
    }
}
class Clients extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row animated slideInLeft wow">
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto" href="https://steppir.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/steppir.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto" href="http://www.onpoint-properties.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/onpoint.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto" href="https://bigscontracting.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/bigscontracting.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto" href="https://coinglomerate.co/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/coinglomerate.png')} className='w-100' alt="Client logo" />
                    </a>
                </div>
                <div className="py-5 text-muted animated bounceInUp wow">
                    <p className='mb-0'>View More</p>
                    <i className='fa fa-sort-down fa-3x' />
                </div>
            </div>
        );
    }
}
class WebProjects extends React.Component {
    render() {
        return (
            <div className="album pb-5 bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <a className="col-md-6 col-lg-4 animated fadeInLeft wow" href="https://algoswitch.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>AlgoSwitch by Coinglomerate</h2>
                                        <p className="mb-0">A cryptocurrency mining pool web portal for Coinglomerate's revolutionary software, AlgoSwitch.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/algoswitch.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">AlgoSwitch by Coinglomerate</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">04/17</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="https://bigscontracting.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Big's Contracting Agency</h2>
                                        <p className="mb-0">A powerful react app configured with Firebase for backend. This application provides authentication 
                                                            for client and contractor data along with the ability to create and sign up for jobs.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/bigscontracting.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Big's Contracting Agency</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">03/18</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="https://coinglomerate.co" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Coinglomerate LLC</h2>
                                        <p className="mb-0">A classic single page webstite built with HTML5, CSS, and JavaScript for interactive scrolling and animation.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/coinglomerate.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Coinglomerate Mining Solutions</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">12/17</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated fadeInRight wow" href="https://andrewmahoneyf.github.io/SteppIR-Newsletter/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>SteppIR Newsletter</h2>
                                        <p className="mb-0">An HTML5 email newsletter created for SteppIR Communication Systems. We provide monthly
                                                            updates to send out to their worldwide customer base</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/newsletter.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">SteppIR Newsletter</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">03/28</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated fadeInRight wow" href="https://steppir.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>SteppIR Communication Systems</h2>
                                        <p className="mb-0">A WordPress site we constantly monitor and update along with creating several web pages.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/steppir.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">SteppIR Communication Systems</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">10/17</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

class MobileProjects extends React.Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" src={''} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">OnPoint Real Estate</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group" href="" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </a>
                                        <small className="text-muted">04/18</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" src={''} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Big's Mobile Detailing</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group" href="" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </a>
                                        <small className="text-muted">05/18</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
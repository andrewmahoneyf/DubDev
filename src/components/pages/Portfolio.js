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
                <Web />
            </section>
        );
    }
}

class Web extends React.Component {
    render() {
        return (
            <div className="album pb-5 bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 animated fadeInLeft wow">
                            <div className="card mb-4 box-shadow zoom">
                                <img className="card-img-top" src={require('../../images/bigscontracting.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Big's Contracting Agency</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group" href="https://bigscontracting.com/" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </a>
                                        <small className="text-muted">03/18</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 animated zoomIn wow">
                            <div className="card mb-4 box-shadow zoom">
                                <img className="card-img-top" src={require('../../images/coinglomerate.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Coinglomerate Mining Solutions</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group" href="https://coinglomerate.co" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </a>
                                        <small className="text-muted">12/17</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 animated fadeInRight wow">
                            <div className="card mb-4 box-shadow zoom">
                                <img className="card-img-top" src={require('../../images/steppir.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">SteppIR Communication Systems</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group" href="https://steppir.com/" target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </a>
                                        <small className="text-muted">10/17</small>
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

class Mobile extends React.Component {
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
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

/* Client logos */
class Clients extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row animated slideInLeft wow">
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="https://steppir.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/steppir.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="https://www.chartercoin.com/index.php" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/chartercoin.png')} className='w-100' alt="Client logo" />
                    </a>    
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="http://www.onpoint-properties.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/onpoint.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="https://bigscontracting.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/bigscontracting.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="http://sideraconsult.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/sidera.png')} className='w-100' alt="Client logo" />
                    </a>
                    <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="https://coinglomerate.co/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/coinglomerate.png')} className='w-100' alt="Client logo" />
                    </a>
                    {/* <a className="col-6 col-md-3 col-lg-2 align-middle my-auto logo" href="https://intentional3d.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../images/clients/i3D.png')} className='w-100' alt="Client logo" />
                    </a> */}
                </div>
                <div className="py-5 text-muted animated bounceInUp wow">
                    <p className='mb-0'>View More</p>
                    <i className='fa fa-sort-down fa-3x' />
                </div>
            </div>
        );
    }
}

/* Project cards */
class WebProjects extends React.Component {
    render() {
        return (
            <div className="album pb-5 bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <a className="col-md-6 col-lg-4 animated fadeInLeft wow" href="http://www.onpoint-properties.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Onpoint Real Estate</h2>
                                        <p className="mb-0">Complete redesign of Onpoint's WordPress site including additions such as integrating an MLS API for property searches.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/onpoint.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Onpoint Real Estate Services</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">05/25</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="https://www.chartercoin.com/index.php" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Chartercoin</h2>
                                        <p className="mb-0">A website built with Joomla CMS for a local blockchain startup providing the world's first quantum resistant encryption.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/chartercoin.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Chartercoin</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">05/01</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="col-md-6 col-lg-4 animated fadeInRight wow" href="https://algoswitch.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>AlgoSwitch by Coinglomerate</h2>
                                        <p className="mb-0">An authenticated web portal for Coinglomerate's cryptocurrency mining pool to connect with their revolutionary
                                                            software, AlgoSwitch.</p>
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
                        <a className="col-md-6 col-lg-4 animated fadeInLeft wow" href="https://andrewmahoneyf.github.io/SteppIR-Newsletter/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>SteppIR Newsletter</h2>
                                        <p className="mb-0">An HTML5 email newsletter developed for SteppIR Communication Systems. We update their
                                                            newsletter monthly and send it out to their worldwide customer base.</p>
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
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="https://bigscontracting.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Big's Contracting Agency</h2>
                                        <p className="mb-0">A powerful react app configured with Firebase Cloud Firestore. This application provides authentication
                                                            for client's and contractor's data along with the ability to create and sign up for jobs.</p>
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
                        <a className="col-md-6 col-lg-4 animated fadeInRight wow" href="https://coinglomerate.co" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Coinglomerate LLC</h2>
                                        <p className="mb-0">A classic single page website built with HTML5, CSS, and JavaScript including
                                                            interactive scrolling and animation.</p>
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
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="https://steppir.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>SteppIR Communication Systems</h2>
                                        <p className="mb-0">A WordPress site we monitor and update constantly with new content and web pages.</p>
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
                        <a className="col-md-6 col-lg-4 animated zoomIn wow" href="http://sideraconsult.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mb-4 box-shadow zoom">
                                <span className="caption">
                                    <span className="caption-content align-middle m-auto">
                                        <h2>Sidera Consult</h2>
                                        <p className="mb-0">Updated WordPress site for the top trade consulting company in Brazil.</p>
                                    </span>
                                </span>
                                <img className="card-img-top" src={require('../../images/projects/sidera.png')} alt="Card cap" />
                                <div className="card-body">
                                    <p className="card-text">Sidera Consult | Market Access &amp; Expansion</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn-group">
                                        </a>
                                        <small className="text-muted">08/17</small>
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
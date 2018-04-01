import React from 'react';
import '../../styles/Projects.scss';


class Web extends React.Component {
    render() {
        return (
            <section className="projects">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={'../../images/dubdev.png'} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">DubDev</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://dubdev.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://dubdev.local/');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={require('../../images/coinglomerate.png')} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">Coinglomerate Mining Solutions</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://coinglomerate.co');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://coinglomerate.local');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">12/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={'../../images/bigs.png'} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">Big's Contracting Agency</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://bigscontracting.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://bigscontracting.local/');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={require('../../images/andrewmf.png')} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">Andrew's Portfolio</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://andrewmf.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://andrewmf.local/home.html');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">01/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={'../../images/jamesslee.png'} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">James' Portfolio</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://jamesslee.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://jamesslee.local/');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">10/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">8========D</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Mobile extends React.Component {
    render() {
        return (
            <section className="projects">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={'../../images/dubdev.png'} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">DubDev</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://dubdev.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://dubdev.local/');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={require('../../images/coinglomerate.png')} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">Coinglomerate Mining Solutions</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://coinglomerate.co');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://coinglomerate.local');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">12/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={'../../images/bigs.png'} alt="Card cap" />
                                    <div className="card-body">
                                        <p className="card-text">Big's Contracting Agency</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onclick="window.open('http://bigscontracting.com/');" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://bigscontracting.local/');" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export { Web, Mobile };
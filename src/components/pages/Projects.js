import React from 'react';
import '../../styles/Projects.scss';


class Web extends React.Component {
    render() {
        return (
            <main role="main" class="projects">
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={'../../images/dubdev.png'} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">DubDev</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://dubdev.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://dubdev.local/');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={require('../../images/coinglomerate.png')} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">Coinglomerate Mining Solutions</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://coinglomerate.co');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://coinglomerate.local');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">12/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={'../../images/bigs.png'} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">Big's Contracting Agency</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://bigscontracting.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://bigscontracting.local/');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={require('../../images/andrewmf.png')} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">Andrew's Portfolio</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://andrewmf.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://andrewmf.local/home.html');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">01/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={'../../images/jamesslee.png'} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">James' Portfolio</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://jamesslee.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://jamesslee.local/');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">10/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">8========D</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

class Mobile extends React.Component {
    render() {
        return (
            <main role="main" class="projects">
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={'../../images/dubdev.png'} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">DubDev</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://dubdev.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://dubdev.local/');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={require('../../images/coinglomerate.png')} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">Coinglomerate Mining Solutions</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://coinglomerate.co');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://coinglomerate.local');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">12/17</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card mb-4 box-shadow">
                                    <img class="card-img-top" src={'../../images/bigs.png'} alt="Card cap" />
                                    <div class="card-body">
                                        <p class="card-text">Big's Contracting Agency</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" onclick="window.open('http://bigscontracting.com/');" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" onclick="window.open('http://bigscontracting.local/');" class="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small class="text-muted">03/18</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export { Web, Mobile };
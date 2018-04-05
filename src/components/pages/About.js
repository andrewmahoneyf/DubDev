import React from 'react';
import andrew from '../../images/andrew.png';
import james from '../../images/james.png';
import logo from '../../images/DubDevLogo.png';
import react from '../../images/react.png';
import wordpress from '../../images/wordpress.jpg';
import drupal from '../../images/drupal.png';
import angular from '../../images/angular.jpg';

export default class About extends React.Component {
  render() {
    return (
      <section className="about bg-light">
        <div className="jumbotron p-3 p-md-5 mb-0 mb-md-5 bg-black">
          <div className="col-md-8 col-lg-6 p-4 p-lg-0 mx-auto mt-5 mt-lg-0 headline">
            <img src={logo} alt="logo" className="w-75" />
          </div>
        </div>

        <Blog />
        {/*<Timeline />*/}

        <section className="team">
          <div className="p-3 p-md-5 bg-black mb-5">
            <div className="col-md-6 px-0 container">
              <h1 className="display-4 pt-md-4">Meet Our Developers</h1>
              <p className="lead my-3 text-white">Our team has a wide range of knowledge and experience in web development. Check out their sites below to learn more about DubDev's founders.</p>
            </div>
          </div>
          <Founders />
        </section>
      </section>
    );
  }
}


class Blog extends React.Component {
  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-7 blog-main mb-3">

            <div className="pb-3 pb-md-5 mb-3 bg-black services">
              <div className="col-md-6 px-0 container">
                <h1 className="display-4 pt-3">Our Services</h1>
                <p className="lead my-3 px-5 text-white">DubDev provides small businesses with an affordable option for web development and hosting. We specialize in and prefer React development but we can do it all.</p>
              </div>
            </div>

            <div className="blog-post border-top pt-3">
              <h2>Boosting local businesses.</h2>
              <hr />
              <p>
                DubDev is a full-service web, tablet, and mobile application development company founded by two
                University of Washington students in 2018 after recieving several requests for development work.
                <strong> Dub</strong> is synomonous for "www" and <strong>Dev</strong> is short for development.
              </p>
              <p>
                Our devlopers are located in Seattle, WA and prefer to work hands-on with clients. In order to get 
                things going, we need to meet and carefully plan out your design and ideas. Our development work 
                will be done remotely, but we provide constant updates as well as access to a public URL so you can 
                provide feedback along the way. If your company is out of the state, contact us for further details. 
              </p>
            </div>

            <div className="blog-post border-top pt-3">
              <h2>Your website made your way.</h2>
              <hr />
              <p>
                Our developers specialize in and prefer React development, but we can do it all. We are open to
                any project or specification you may have. React, WordPress, Drupal, and Angular are our current 
                qualifications, but note that these are not limitations. As our promise, we are open to testing 
                any CMS or JavaScript library you desire.
              </p>
            </div>
          </div>
          <aside className="col-md-5 blog-sidebar">
            <Cards />
          </aside>
        </div>
      </section>
    );
  }
}


class Cards extends React.Component {
  render() {
    return (
      <div className="mb-2 cards">
        <div className="card flex-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <h3 className="mb-0 text-success">ReactJS</h3>
            <p className="card-text mb-auto">A JavaScript library for building user interfaces and powerful apps maintained by Facebook.</p>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <img className="card-img-right flex-auto d-md-none d-lg-block" src={react} alt="Card cap" />
        </div>
        <div className="card flex-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <h3 className="mb-0 text-success">WordPress</h3>
            <p className="card-text mb-auto">WordPress.com powers beautiful websites for businesses, professionals, and bloggers.</p>
            <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <img className="card-img-right flex-auto d-md-none d-lg-block" src={wordpress} alt="Card cap" />
        </div>
        <div className="card flex-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <h3 className="mb-0 text-success">Drupal 8</h3>
            <p className="card-text mb-auto">Drupal is free, open source software, produced by over a million users in 230 countries.</p>
            <a href="http://www.drupal.com/" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <img className="card-img-right flex-auto d-md-none d-lg-block" src={drupal} alt="Card cap" />
        </div>
        <div className="card flex-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <h3 className="mb-0 text-success">AngularJS</h3>
            <p className="card-text mb-auto">AngularJS is a JavaScript-based front-end web application framework maintained by Google.</p>
            <a href="https://angularjs.org/" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
          <img className="card-img-right flex-auto d-md-none d-lg-block" src={angular} alt="Card cap" />
        </div>
      </div>
    );
  }
}


class Timeline extends React.Component {
  render() {
    return (
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Development Process</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="timeline">
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 class="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 class="subheading">An Agency is Born</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 class="subheading">Transition to Full Service</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>Be Part
                    <br />Of Our
                    <br />Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export class Founders extends React.Component {
  render() {
    return (
      <div className="container pb-5">
        <div className="row text-center equal">
          <div className="col-md-6 mb-0 mb-md-4 px-5">
            <div className="card text-white bg-teal">
              <div className="w-100 h-50">
                <div className="avatar mx-auto my-3">
                  <img src={andrew} className="rounded-circle img-fluid" alt="Andrew's avatar " />
                </div>
              </div>
              <div className="card-body bg-light text-dark">
                <h5 className="font-weight-bold">
                  <strong>Andrew Mahoney-Fernandes</strong>
                </h5>
                <p className="grey-text">Co-Founder / Head of Front-End Development</p>
                <p>Andrew is a senior at the University of Washington with a strong background in web development. He has experience monitoring and building complex websites, with several internships to date for various companies as well as the University of Washington.</p>
                <ul className="list-unstyled">
                  <a className="icons-sm fb-ic" href="https://github.com/andrewmahoneyf" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github blue-text"> </i>
                  </a>
                  <a className="icons-sm ins-ic" href="https://www.linkedin.com/in/amahoneyfernandes/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin blue-text"> </i>
                  </a>
                  <a className="icons-sm ins-ic" href="https://andrewmf.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-globe blue-text"> </i>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 px-5">
            <div className="card text-white bg-teal">
              <div className="w-100 h-50">
                <div className="avatar mx-auto my-3">
                  <img src={james} className="rounded-circle img-fluid" alt="James' avatar" />
                </div>
              </div>
              <div className="card-body bg-light text-dark">
                <h5 className="font-weight-bold">
                  <strong>James Lee</strong>
                </h5>
                <p className="grey-text">Co-Founder / Head of Back-End Development</p>
                <p>James is a senior at the University of Washington and focuses on creating back-end solutions for clients. As a student, he received his certification for database management and has experience building a range of web applications from scratch.</p>
                <ul className="list-unstyled">
                  <a className="icons-sm fb-ic" href="https://github.com/Sanghawk" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github blue-text"> </i>
                  </a>
                  <a className="icons-sm ins-ic" href="https://www.linkedin.com/in/james-lee-5a992a115/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin blue-text"> </i>
                  </a>
                  <a className="icons-sm ins-ic" href="" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-globe blue-text"> </i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
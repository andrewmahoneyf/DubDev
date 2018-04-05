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
        <div className="jumbotron p-3 p-md-5 mb-0 bg-black">
          <div className="col-md-8 col-lg-6 p-4 p-lg-0 mx-auto mt-5 mt-lg-0 headline">
            <img src={logo} alt="logo" className="w-75" />
          </div>
        </div>

        <div className="pb-3 pb-md-5 mb-3 mb-md-5 bg-black">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4">Our Services</h1>
            <p className="lead my-3 text-white">DubDev provides small businesses with an affordable option for web development and hosting. We specialize in and prefer React development but we can do it all.</p>
          </div>
        </div>

        <Blog />
        <Timeline />

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
          <aside className="col-md-5 blog-sidebar">
            <Cards />
          </aside>

          <div className="col-md-7 blog-main">
            <h3 className="pb-3 mb-4 font-italic border-bottom">Customized Websites</h3>

            <div className="blog-post">
              <h2 className="blog-post-title">Our Foundation</h2>
              <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
              <hr />
              <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div className="blog-post">
              <h2 className="blog-post-title">Our Skills</h2>
              <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </div>
          </div>
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
                    <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 class="subheading">Phase Two Expansion</h4>
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
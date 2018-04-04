import React from 'react';
import andrew from '../../images/andrew.png';
import james from '../../images/james.png';
import logo from '../../images/DubDevLogo.png';

export default class About extends React.Component {
  render() {
    return (
      <section className="about bg-light">
        <div className="jumbotron p-3 p-md-5 mb-0 bg-black">
          <div className="col-md-8 col-lg-6 p-4 p-lg-0 mx-auto mt-5 mt-lg-0 headline">
            <img src={logo} alt="logo" className="w-75" />
          </div>
        </div>
        {/*
        <h1 className="display-4 pt-md-4 bg-black ">Our Services</h1>
        <p className="lead my-3">DubDev provides small businesses with an affordable option for web development and hosting.
                                                 We specialize in and prefer React development but we can do it all.
                                                 Already have a website but need updates? <a href="#contact">Contact us below!</a></p>


        
        <div className="jumbotron p-3 p-md-5 text-white bg-black">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4 pt-md-4">Our Services</h1>
            <p className="lead my-3">DubDev provides small businesses with an affordable option for web development and hosting. We specialize in and prefer React development but we can do it all.</p>
          </div>
        </div>
        <div className="container">

          <div className="row mb-2">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-primary">World</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="/">Featured post</a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="/">Continue reading</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card cap" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-success">Design</strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="/">Post title</a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="/">Continue reading</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card cap" />
              </div>
            </div>
          </div>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h3 className="pb-3 mb-4 font-italic border-bottom">
                From the Firehose</h3>

              <div className="blog-post">
                <h2 className="blog-post-title">Sample blog post</h2>
                <p className="blog-post-meta">January 1, 2014 by <a href="/">Mark</a></p>

                <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                <hr />
                <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <h2>Heading</h2>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <h3>Sub-heading</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <pre><code>Example code block</code></pre>
                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                <h3>Sub-heading</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <ul>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                  <li>Donec id elit non mi porta gravida at eget metus.</li>
                  <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                <ol>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                </ol>
                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
              </div>

              <div className="blog-post">
                <h2 className="blog-post-title">Another blog post</h2>
                <p className="blog-post-meta">December 23, 2013 by <a href="/">Jacob</a></p>

                <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              </div>

            </div>

            <aside className="col-md-4 blog-sidebar">
              <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              </div>

              <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li><a href="/">March 2014</a></li>
                  <li><a href="/">February 2014</a></li>
                  <li><a href="/">January 2014</a></li>
                  <li><a href="/">December 2013</a></li>
                  <li><a href="/">November 2013</a></li>
                  <li><a href="/">October 2013</a></li>
                  <li><a href="/">September 2013</a></li>
                  <li><a href="/">August 2013</a></li>
                  <li><a href="/">July 2013</a></li>
                  <li><a href="/">June 2013</a></li>
                  <li><a href="/">May 2013</a></li>
                  <li><a href="/">April 2013</a></li>
                </ol>
              </div>

              <div className="p-3">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><a href="/">GitHub</a></li>
                  <li><a href="/">Twitter</a></li>
                  <li><a href="/">Facebook</a></li>
                </ol>
              </div>
            </aside>
          </div>
        </section> 
      
    
        <Timeline /> */}

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

export class Timeline extends React.Component {
  render() {
    return (
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">About</h2>
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
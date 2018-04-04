import React from 'react';
import andrew from '../../images/andrew.png';
import james from '../../images/james.png';


export default class Team extends React.Component {
  render() {
    return (
      <section className="team bg-light">
        <div className="jumbotron p-3 p-md-5 text-white bg-dark">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4 pt-md-4">Meet Our Developers</h1>
            <p className="lead my-3">Our team has a wide range of knowledge and experience in web development. Check out their sites below to learn more about DubDev's founders.</p>
          </div>
        </div>

        <div className="container">
          <div class="row text-center equal">
            <div class="col-md-6 mb-0 mb-md-4 p-5">
              <div class="card text-white">
                <div className="w-100 h-50">
                  <div class="avatar mx-auto my-3">
                    <img src={andrew} class="rounded-circle img-fluid" alt="Andrew's avatar " />
                  </div>
                </div>
                <div class="card-body bg-light text-dark">
                  <h5 class="font-weight-bold">
                    <strong>Andrew Mahoney-Fernandes</strong>
                  </h5>
                  <p class="grey-text">Co-Founder / Head of Front-End Development</p>
                  <p>Andrew is a senior at the University of Washington with a strong background in web development. He has experience monitoring and building complex websites, with several internships to date for various companies as well as the University of Washington.</p>
                  <ul class="list-unstyled">
                    <a class="icons-sm fb-ic" href="https://github.com/andrewmahoneyf" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-github blue-text"> </i>
                    </a>
                    <a class="icons-sm ins-ic" href="https://www.linkedin.com/in/amahoneyfernandes/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-linkedin blue-text"> </i>
                    </a>
                    <a class="icons-sm ins-ic" href="https://andrewmf.com/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-globe blue-text"> </i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4 p-5">
              <div class="card text-white">
                <div className="w-100 h-50">
                  <div class="avatar mx-auto my-3">
                    <img src={james} class="rounded-circle img-fluid" alt="James' avatar" />
                  </div>
                </div>
                <div class="card-body bg-light text-dark">
                  <h5 class="font-weight-bold">
                    <strong>James Lee</strong>
                  </h5>
                  <p class="grey-text">Co-Founder / Head of Back-End Development</p>
                  <p>James is a senior at the University of Washington and focuses on creating back-end solutions for clients. As a student, he received his certification for database management and has experience building a range of web applications from scratch.</p>
                  <ul class="list-unstyled">
                    <a class="icons-sm fb-ic" href="https://github.com/Sanghawk" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-github blue-text"> </i>
                    </a>
                    <a class="icons-sm ins-ic" href="https://www.linkedin.com/in/james-lee-5a992a115/" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-linkedin blue-text"> </i>
                    </a>
                    <a class="icons-sm ins-ic" href="" target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-globe blue-text"> </i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
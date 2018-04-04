import React from 'react';
import andrew from '../../images/andrew.png';
import james from '../../images/james.png';


export default class Team extends React.Component {
  render() {
    return (
      <section className="team bg-light">
        <div className="jumbotron p-3 p-md-5 text-white bg-black">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4 pt-md-4">Meet Our Developers</h1>
            <p className="lead my-3">Our team has a wide range of knowledge and experience in web development. Check out their sites below to learn more about DubDev's founders.</p>
          </div>
        </div>
        <Founders />
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
                  <strong>James Sanghawk Lee</strong>
                </h5>
                <p className="grey-text">Co-Founder / Head of Back-End Development</p>
                <p>James eats weiners! Dogs and pene! HA Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
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
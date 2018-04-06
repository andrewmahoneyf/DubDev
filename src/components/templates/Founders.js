import React from 'react';
import andrew from '../../images/andrew.png';
import james from '../../images/james.png';


export default class Founders extends React.Component {
  render() {
    return (
      <div className="container pb-5 team">
        <div className="row text-center equal">
          <div className="col-md-6 mb-2 mb-md-4 px-5 animated zoomIn">
            <div className="card text-white box-shadow zoom">
              <div className="w-100 h-50 bg-teal">
                <div className="avatar mx-auto my-3">
                  <img src={andrew} className="rounded-circle img-fluid" alt="Andrew's avatar" />
                </div>
              </div>
              <div className="card-body bg-light text-dark rounded-bottom">
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

          <div className="col-md-6 mb-4 px-5 animated zoomIn">
            <div className="card text-white box-shadow zoom">
              <div className="w-100 h-50 bg-teal">
                <div className="avatar mx-auto my-3">
                  <img src={james} className="rounded-circle img-fluid" alt="James' avatar" />
                </div>
              </div>
              <div className="card-body bg-light text-dark rounded-bottom">
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
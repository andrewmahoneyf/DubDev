import React from 'react';
import '../../styles/Team.scss';

export default class Team extends React.Component {
  render() {
    return (
      <section className="team">
        <div className="jumbotron p-3 p-md-5 text-white bg-dark">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
            <p className="lead mb-0"><a href="/" className="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>
        <div className="container team">
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder " width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Nosotros </h1>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam.
            <br />
            Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;

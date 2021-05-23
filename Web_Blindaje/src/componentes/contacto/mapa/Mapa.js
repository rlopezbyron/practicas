import React from "react";

class Mapa extends React.Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.636356627747!2d-3.7056720850744664!3d40.41690596355354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a07d7dc7%3A0x694aee57da1dc679!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620927140186!5m2!1ses!2ses"
        ></iframe>
      </div>
    );
  }
}

export default Mapa;

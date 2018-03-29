import React from "react";

const Jumbotron = () => (
  <div style={{ height: 500, clear: "both" }} className="jumbotron">
    <h1>Inkling</h1>
    <p>
      <img src={require('./logotype.png')} alt="Inkling Logo" />
    </p>
  </div>
);

export default Jumbotron;

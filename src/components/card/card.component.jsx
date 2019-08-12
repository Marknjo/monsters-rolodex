import React from "react";

import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="Monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name} </h2>
      <p><b>Email Address: </b> {props.monster.email}</p>
      <p><b>Home Address: </b> {props.monster.address.street}</p>
      <p><b>Appartment: </b>{props.monster.address.suite}</p>
    </div>
  );
};

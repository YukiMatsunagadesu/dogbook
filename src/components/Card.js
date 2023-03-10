import React from "react";
import "./Card.css";

const Card = ({ dog }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={dog.image.url} alt="" width="300px" height="300px" />
      </div>
      <div className="type">
        <h1>Breed </h1>
        {dog.name}
      </div>
      <div>
        <h1>Personality</h1>
        {dog.temperament}
      </div>
    </div>
  );
};

export default Card;

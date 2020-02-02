import React from "react";
import PropTypes from "prop-types";

function Card({ title, description }) {
  return (
    <div draggable={"true"} className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}

Card.propTypes = {};

export default Card;

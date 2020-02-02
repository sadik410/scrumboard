import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Column({ title, cards }) {
  return (
    <div className="list">
      <h3>{title}</h3>
      {cards.map(({ id, title, description }, index) => (
        <Card key={id} title={title} description={description} />
      ))}
      <button>Add new task</button>
    </div>
  );
}

Column.propTypes = {};

export default Column;

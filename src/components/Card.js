import React, { useCallback } from "react";
import PropTypes from "prop-types";

function Card({ id, index, title, description, parentId }) {
  const onDragStart = useCallback(
    (event) => {
      event.dataTransfer.setData("cardIndex", index);
      event.dataTransfer.setData("parentId", parentId);
    },
    [index, parentId]
  );

  const onDragOver = useCallback((event) => {
    event.stopPropagation();
  }, []);
  console.log("index", typeof index);
  return (
    <div
      draggable={"true"}
      className="card"
      id={id}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  parentId: PropTypes.string
};

export default Card;

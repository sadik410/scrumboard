import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Column({ id, title, cards, onCardMove, setHiddenCard }) {
  const hiddenCard = useCallback(() => {
    setHiddenCard(true);
  }, [setHiddenCard]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const cardIndex = event.dataTransfer.getData("cardIndex");
      const parentId = event.dataTransfer.getData("parentId");
      if (parentId !== id) {
        onCardMove(cardIndex, parentId, event.target.id);
      }
    },
    [onCardMove]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);
  return (
    <div className="list" id={id} onDrop={onDrop} onDragOver={onDragOver}>
      <h3>{title}</h3>
      {cards &&
        cards.map((card, index) => (
          <Card
            key={card.id}
            id={id}
            index={index}
            title={card.title}
            parentId={id}
            description={card.description}
          />
        ))}
      {setHiddenCard && (
        <button className="add" onClick={hiddenCard}>
          +
        </button>
      )}
    </div>
  );
}

Column.propTypes = {};

export default Column;

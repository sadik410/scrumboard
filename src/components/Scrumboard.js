import React, { useState, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Column from "./Column";
import Modal from "./Modal";

const initialState = {
  stories: {
    title: "Story",
    cards: [
      { id: "card-1", title: "Task-1", description: "create REST API" },
      { id: "card-2", title: "Task-2", description: "Deploy app" }
    ]
  },
  open: {
    title: "Open",
    cards: []
  },
  inProgress: {
    title: "In Progress",
    cards: []
  },
  done: {
    title: "Done",
    cards: []
  }
};

function Scrumboard(props) {
  const [board, setBoard] = useState();
  const [hiddenCard, setHiddenCard] = useState(false);

  const boardKeys = useMemo(() => Object.keys(initialState), []);

  useEffect(() => {
    let boardlocalStorage = JSON.parse(localStorage.getItem("board"));
    if (boardlocalStorage) {
      setBoard({ ...boardlocalStorage });
      console.log("s1ss", boardlocalStorage);
    } else {
      setBoard({ ...initialState });
      console.log("ss2s");
    }
    console.log("sss");
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);
  const createCard = useCallback(
    ({ title, description }) => {
      board.stories.cards.push({ id: title.length, title, description });
      setBoard({ ...board });
      setHiddenCard(false);
    },
    [board, setBoard]
  );
  const onCardMove = useCallback(
    (cardIndex, source, destination) => {
      //remove card from the previous list
      const [card] = board[source].cards.splice(cardIndex, 1);

      //add card from the selected list
      board[destination].cards.push(card);

      //update the state
      setBoard({ ...board });
    },
    [board, setBoard]
  );

  console.log("board", board);
  return (
    <div>
      <h2> Scrumboard</h2>
      {hiddenCard && (
        <Modal createCard={createCard} setHiddenCard={setHiddenCard} />
      )}
      <div className="flexbox">
        {board &&
          boardKeys.map((key) => {
            return (
              <Column
                setHiddenCard={key === "stories" && setHiddenCard}
                key={key}
                id={key}
                title={board[key].title}
                cards={board[key].cards}
                onCardMove={onCardMove}
              />
            );
          })}
      </div>
    </div>
  );
}

Scrumboard.propTypes = {};

export default Scrumboard;

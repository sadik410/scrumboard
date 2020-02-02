import React, { useState } from "react";
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
  return (
    <div>
      <Modal />
      <div className="flexbox">
        {Object.keys(initialState).map((key) => {
          return (
            <Column
              key={key}
              title={initialState[key].title}
              cards={initialState[key].cards}
            />
          );
        })}
      </div>
    </div>
  );
}

Scrumboard.propTypes = {};

export default Scrumboard;

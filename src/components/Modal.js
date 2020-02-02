import React, { useState } from "react";
import PropTypes from "prop-types";

function Modal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log("title", title, description);
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Ajouter un ticket </h4>
        <div className="container">
          <div>
            <span className="title">title :</span>
            <input value={title} type="text" />
          </div>
          <p className="title">description :</p>
          <textarea type="text" value={description} rows="4" cols="50" />
        </div>
        <button>Add new task</button>
        <button>Annuler</button>
      </div>
    </div>
  );
}

Modal.propTypes = {};

export default Modal;

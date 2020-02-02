import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

//custom hook useOnChange
function useOnChange() {
  const [state, setState] = useState("");

  const onChange = (event) => {
    setState(event.target.value);
  };

  return [state, onChange];
}

function Modal({ setHiddenCard, createCard }) {
  const [title, setTitle] = useOnChange("");
  const [description, setDescription] = useOnChange("");

  const addCard = useCallback(() => {
    if (title.trim() && description.trim()) {
      createCard({ title, description });
    } else alert("vous devez remplir les champs obligatoire");
  }, [title, description, createCard]);

  const hiddenCard = useCallback(() => {
    setHiddenCard(false);
  }, [setHiddenCard]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Ajouter un ticket </h4>
        <div className="container">
          <div>
            <span className="title">* title :</span>
            <input value={title} onChange={setTitle} type="text" />
          </div>
          <p className="title">* description :</p>
          <textarea
            type="text"
            value={description}
            onChange={setDescription}
            rows="4"
            cols="50"
          />
        </div>
        <button onClick={addCard}>Add new task</button>
        <button onClick={hiddenCard}>Annuler</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  parentId: PropTypes.string
};

export default Modal;

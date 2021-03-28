import React, { useState } from "react";

import Button from "../Button";
import Input from "../Input";

import "./style.scss";

//add proptypes

const TodoForm = ({ addTodo }) => {
  const [state, setState] = useState({
    tache: "",
    description: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.description || !state.tache) return;
    let todo = {
      text: state.tache,
      description: state.description,
      isCompleted: false,
    };
    addTodo(todo);
    setState({
      tache: "",
      description: "",
    });
  };

  return (
    <div className="todo-form">
      <div className="entry-group">
        <Input
          label="Nom de la tache"
          type="text"
          className="input"
          name="tache"
          value={state.tache}
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Description de la tache en une ligne"
          type="text"
          className="input"
          name="description"
          value={state.description}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <Button
        theme="primary"
        content="Ajouter la tache"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default TodoForm;

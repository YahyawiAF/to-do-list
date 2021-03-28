import React from "react";
import Button from "../Button";

import "./style.scss";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="todo__bloc todo__bloc--a">
        <p className="todo__text">{`${todo.text} :`}</p>
        <p className="todo__description">{todo.description}</p>
        <Button
          theme="secondary"
          content="Suprimer"
          className="todo__delete"
          onClick={() => removeTodo(index)}
        />
      </div>
      <div className="todo__bloc">
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

//add proptypes

export default Todo;

import React, { useContext } from "react";
import ToDo from "../../components/ToDo";
import TodoForm from "../../components/TodoForm";
import { ToDoContext } from "../../context";

import "./style.scss";

const ListTode = (props) => {
  const [todos, setTodos] = useContext(ToDoContext);
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="todo-list">
      <p className="todo-list__header">Liste des taches</p>
      <div className="todo-list__list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default ListTode;

import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoContext } from "../context/todo-context";

export const Todo = () => {
  const [state, dispatch] = useContext(TodoContext);
  const [text, setText] = useState("");

  const delTodo = id => {
    dispatch({
      type: "DONE_TODO",
      payload: id,
    });
  };

  const handleTodoDelete = id => {
    delTodo(id);
  };

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (!text) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        text,
        id: uuidv4(),
      },
    });

    setText("");
  };

  return (
    <div>
      <div>
        <label>Add todo:</label>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="button" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul>
        {state.todos.map(({ id, text }) => (
          <li key={id} onClick={() => handleTodoDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
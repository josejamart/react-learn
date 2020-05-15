import React from "react";
import { TodoContextProvider } from "./context/todo-context";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
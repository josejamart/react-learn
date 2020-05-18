import React, { useReducer, useEffect } from "react";
import List from "./components/list";
import { reducer, initState } from "./reducer";
import { getTodos } from "../../api/todo";



function Home(props) {

  const [state, dispatch] = useReducer(reducer, initState)

  const handleDelete = (id) => dispatch({ type: "DELETE_ELEMENT", id });
  const handleAdd = (payload) => dispatch({ type: "ADD_ELEMENT", payload });
  const handleEdit = (payload) => dispatch({ type: "EDIT_ELEMENT", payload });
  const handleToggle = (id) => dispatch({ type: "TOGGLE_TODO", id });

  useEffect(
    () => {
      const getList = async () => {
        const resp = await getTodos();
        dispatch({ type: "LOAD", todos: resp.data })
      };
      getList()
    },
    []);
  return <div className="container">
    <h3>My task list</h3>
    <List
      list={state.list}
      onDelete={handleDelete}
      onAdd={handleAdd}
      onToggle={handleToggle}
      onEdit={handleEdit} />
  </div>;
}

export default Home;
import React, { useState } from "react";
import List from "../home/components/list";

function TodoListUseState() {
    const [list, setList] = useState([]);

    const handleAdd = (task) => {
        setList([...list, task]);
    }

    const handleDelete = (task) => {
        setList(list.filter(t => t.id === task.id));
    }

    return <div>
        <h3 data-testid="title">Task list using useState</h3>
        <List list={list} onAdd={handleAdd} onDelete={handleDelete}></List>
    </div >;
};

export default TodoListUseState;
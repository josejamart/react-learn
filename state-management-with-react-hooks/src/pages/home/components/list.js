import React, { useState, useMemo, useCallback } from "react";
import Row from "./row";
import { v4 } from "uuid";

function List(props) {
    const [newTask, setNewTask] = useState('');

    const handleAdd = useCallback(() => {
        props.onAdd({ id: v4(), text: newTask, completed: false });
        setNewTask('');
    }, [newTask, props]);

    const newInput = useMemo(() => (<div className="row valign-wrapper">
        <input className="col s10" type="text" value={newTask} placeholder="Add new task" onChange={(event) => setNewTask(event.target.value)} />
        <button className="col s2" onClick={handleAdd} disabled={newTask === ""}>Add task</button>
    </div>), [newTask, handleAdd]);

    const elements = useMemo(() => {
        return (props.list.map(todo =>
            <Row
                key={todo.id}
                todo={todo}
                onEdit={() => props.onEdit(todo.id)}
                onDelete={() => props.onDelete(todo.id)}
                onToggle={() => props.onToggle(todo.id)} />
        ))
    }, [props]);

    return [newInput, elements];
}

export default List;
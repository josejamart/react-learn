import React, { useState } from "react";

function List(props) {
    const [isEditMode, setEditMode] = useState(false)
    const [newText, setNewText] = useState(props.todo.text)

    return <tr>
        <td>
            <input type="checkbox" defaultChecked={props.todo.completed} />
        </td>
        <td>
            {isEditMode ? (<input value={newText} onChange={(event) => setNewText(event.target.value)} />) : (newText)}

        </td>
        <td>
            {!isEditMode && <button onClick={() => setEditMode(true)} >edit</button>}
            {isEditMode && <button onClick={() => setEditMode(false)} >save</button>}&nbsp;
            <button onClick={() => setEditMode(true)} >delete</button>&nbsp;
        </td>
    </tr>;
}

export default List;
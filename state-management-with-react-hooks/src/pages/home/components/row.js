import React, { useState } from "react";

function Row(props) {
    const [isEditMode, setEditMode] = useState(false)
    const [newText, setNewText] = useState(props.todo.text)

    return (
        <div className="row">
            <div className="col s1">
                <label>
                    <input type="checkbox" defaultChecked={props.todo.completed} onClick={() => props.onToggle()} />
                    <span></span>
                </label>
            </div>
            <div className="col s9">
                {isEditMode ? (<input value={newText} onChange={(event) => setNewText(event.target.value)} />) : (newText)}
            </div>
            <div className="col s2">
                {!isEditMode && <button className="btn-flat waves-effect waves-light" onClick={() => setEditMode(true)} ><i className="material-icons">edit</i></button>}
                {isEditMode && <button className="btn-flat waves-effect waves-light" onClick={() => { setEditMode(false); props.onEdit(props.todo.id, newText) }} ><i className="material-icons">save</i></button>}&nbsp;
               <button className="btn-flat waves-effect waves-light" onClick={() => props.onDelete()} ><i className="material-icons">delete</i></button>&nbsp;
            </div>
        </div>
    );
}

export default Row;
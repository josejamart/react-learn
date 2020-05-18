import React from "react";
import Row from "./row";

function List(props) {
    console.log(props)
    return <table>
        <thead>
            <tr>
                <td>
                    Uno dos
            </td>
            </tr>
        </thead>
        <tbody>
            {
                props.list.map(todo =>
                    <Row
                        key={todo.id}
                        todo={todo}
                        onEdit={() => console.log(todo.id)}
                        onDelete={() => console.log(todo.id)}
                        onToogle={() => console.log(todo.id)} />)
            }
        </tbody>
    </table>;
}

export default List;
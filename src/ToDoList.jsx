import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}>
                    <Tooltip title="Delete">
                        <DeleteIcon className="deleteIcon"
                        // onClick={() => {
                        //     props.onSelect(props.id)
                        // }}
                        />
                    </Tooltip>
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    )
};

export default ToDoList;
import React from "react";
import './TodoItem.css';

function TodoItem(props){

    return (
        <li className="list">
            <span className={`list--check ${props.completed && 'list--check__completed'}`}
                onClick={props.onComplete}    
            >✓</span>
            <p className={`list--p ${props.completed && 'list--p__completed'}`}>{props.text}</p>
            <span className={`list--trash ${props.completed && 'list--trash'}`} onClick={props.onDelete}  >🗑</span>
        </li>
    );
}

export { TodoItem };
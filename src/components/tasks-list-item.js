import React from 'react';

const TasksListItem = (props) => {
    const name = `${props.value}-${props.index}`;
    return (
        <li key={name} className="tasks-list__item">
            <input type="checkbox" name={name} id={name} />
            <label htmlFor={name}>
            <svg className="icon checkbox-unchecked" version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                <title>checkbox-unchecked</title>
                <path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z" />
            </svg>
            <svg className="icon checkbox-checked" version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                <title>checkbox-checked</title>
                <path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z" />
            </svg>
            {props.value}
            </label>
        </li>
    );
}

export default TasksListItem;
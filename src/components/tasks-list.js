import React from 'react';
import TasksListItem from './tasks-list-item';

const TasksList = (props) => {
    const tasks = props.tasks.map((task, index) => <TasksListItem value={task} index={index} />)
    
    return (
        <ul className="tasks-list">
            {tasks.length === 0 ? <p className="text-help">Please enter a task in form above</p> : tasks}
        </ul>
    );
}

export default TasksList;
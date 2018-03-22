import React from 'react';
import TasksListItem from './tasks-list-item';

const TasksList = (props) => {
    const tasks = props.tasks.map(task => <TasksListItem value={task} />)
    
    return (
        <ul>
            Tasks List
            {tasks}
        </ul>
    );
}

export default TasksList;
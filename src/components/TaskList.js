import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import TaskEdit from './TaskEdit';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            <TaskEdit task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

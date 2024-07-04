import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

const TaskEdit = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask(task.id, updatedTask));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleEditTask()}
          />
          <button onClick={handleEditTask}>Save</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default TaskEdit;

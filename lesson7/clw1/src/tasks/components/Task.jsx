import React from 'react';

const Task = ({task, toggleCheckboxIsFinish, handleDelete}) => {
  const nameClass = task.isDone ? "list-item list-item_done" :  "list-item";
  
  return (
    <li className={nameClass}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => toggleCheckboxIsFinish({...task, isDone: !task.isDone})}
        checked={task.isDone}
      />
      {task.text}
      <button className="list-item__delete-btn" onClick={() => handleDelete(task.id)}></button>
    </li>
  );
};

export default Task;
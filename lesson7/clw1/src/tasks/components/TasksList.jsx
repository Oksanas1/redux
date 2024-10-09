import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import Task from './Task';
import { getTasksList, toggleIsFinish, handleDelete } from '../tasks.actions'

const TasksList = ({tasksList, getTasksList, toggleIsFinish, handleDelete}) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {
        tasksList.map(task => 
          <Task
            key={task.id}
            task={task}
            toggleCheckboxIsFinish={toggleIsFinish}
            handleDelete={handleDelete}
          />)}
    </ul>
  );
};

const mapStateToProps = state => {
  return ({
    tasksList: state.tasksList,
  });
};

const mapDispatchToProps = {
  getTasksList,
  toggleIsFinish,
  handleDelete,
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
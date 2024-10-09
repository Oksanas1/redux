import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

TasksList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })),
  getTasksList: PropTypes.func.isRequired,
  toggleIsFinish: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
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
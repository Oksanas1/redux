import React from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser } from './users/users.actions';

const Users = ({ users, deleteUser, addUser }) => {
  const onCreateUser = () => {
    const userId = Math.random().toString().slice(2,8);
    console.log(userId)
    addUser({id: userId, name: 'User #'})
  }

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onCreateUser}>Create user</button>
      <ul className="users__list">
        {users.map(({name, id}) => (
          <li className="users__list-item" key={id}>
            <span>{name} {id}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    users: state.usersList,
  });
}

const mapDispatchToProps = {
  deleteUser,
  addUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Users);
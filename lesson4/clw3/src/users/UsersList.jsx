import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux';
import { prevUsers, nextUsers } from './users.actions';
import Pagination from "./Pagination";
import User from "./User";

const UsersList = ({ users, currentPage, nextUsers, prevUsers }) => {
  const [firstIndexOfUserForPage, setFirstIndexOfUserForPage] = useState(currentPage * 3);
  const [itemPerPage, setItemPerPage] = useState(3);
  const [userList, setUserList] = useState(users.slice(0, 3));

  useEffect(() => {
    setFirstIndexOfUserForPage(currentPage * 3);
    setItemPerPage(users.length - firstIndexOfUserForPage > 2 ? 3 : users.length - firstIndexOfUserForPage);
    setUserList(users.slice(firstIndexOfUserForPage, firstIndexOfUserForPage + itemPerPage));
  }, [currentPage, firstIndexOfUserForPage]);

  return (
    <div>
      <Pagination
        goPrev={prevUsers}
        goNext={nextUsers}
        totalItems={users.length}
        currentPage={currentPage + 1}
        itemPerPage={firstIndexOfUserForPage}
      />
      {
        userList.map(({id, age, name}) => (
          <User
            key={id}
            age={age}
            name={name}
          />))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    users: state.usersList,
    currentPage: state.currentPage,
  });
};

const mapDispatchToProps = {
  prevUsers,
  nextUsers,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UsersList);
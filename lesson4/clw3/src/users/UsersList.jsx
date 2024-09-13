import React from "react";
import { connect } from 'react-redux';
import { prevPage, nextPage } from './users.actions';
import Pagination from "./Pagination";
import User from "./User";

const UsersList = ({ users, currentPage, goPrev, goNext, itemsPerPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {paginatedUsers.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    users: state.usersList,
    currentPage: state.currentPage,
    itemsPerPage: 3,
  });
};

const mapDispatchToProps = {
  goPrev: prevPage,
  goNext: nextPage,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UsersList);
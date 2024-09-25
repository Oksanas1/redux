import React from "react";
import { connect } from "react-redux";
import Filter from "../Filter";
import { changeText } from "./users.actions";
import User from "./User";

const UsersList = ({ filterText, usersList, onChange }) => (
  <div>
    <Filter onChange={onChange} filterText={filterText} count={usersList.length} />
    <ul className="users">
      {
        usersList.map(({ name, age, id }) => (
          <User name={name} age ={age} key={id} />
        ))
      }
    </ul>
  </div>
  );

const mapStateToProps = ({filterText, usersList}) => {
  return ({
    filterText,
    usersList,
  });
};

const mapDispatchToProps = {
  onChange: changeText,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
import React, { useState } from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

const SearchField = ({fetchUserData}) => {
  const [userName, setUserName] = useState('');

  const onChange = value => {
    setUserName(value);
  };

  const handleChange = () => {
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName} onChange={(e) => onChange(e.target.value)}
      />
      <button className="name-form__btn btn" onClick={handleChange}>Show</button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatchToProps)(SearchField);
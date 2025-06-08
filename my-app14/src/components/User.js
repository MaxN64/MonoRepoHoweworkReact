
import React from 'react';
import { connect } from 'react-redux';

function User(props) {
  const { name, status } = props.user;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};


export default connect(mapStateToProps)(User);

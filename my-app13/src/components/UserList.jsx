
import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import styles from '../styles/UserList.module.css';

const UserList = ({ users, filterValue }) => {

  const normalizedFilter = filterValue.toLowerCase().trim();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filterValue: state.filter,
});

export default connect(mapStateToProps)(UserList);

import React from 'react';
import styles from './UserList.module.css';



const UserList = React.memo(({ users }) => {
  console.log('UserList rendered');
  return (
    <ul className={styles.list}>
      {users.map(user => (
        <li key={user.id} className={styles.listItem}>
          {user.name}
        </li>
      ))}
    </ul>
  );
});

export default UserList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const fetchedUser = response.data.results[0];
      setUser({
        name: `${fetchedUser.name.first} ${fetchedUser.name.last}`,
        email: fetchedUser.email,
        phone: fetchedUser.phone,
        picture: fetchedUser.picture.large,
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={user.picture}
        alt={user.name}
      />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.info}>Email: {user.email}</p>
      <p className={styles.info}>Phone: {user.phone}</p>
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
};

export default UserProfile;


import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ filterValue, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Поиск пользователя..."
        value={filterValue}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterValue: state.filter,
});

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

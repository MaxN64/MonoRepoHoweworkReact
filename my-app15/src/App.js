import React, { useState, useCallback, useMemo } from "react";
import UserList from "./UserList";
import styles from "./App.module.css";

const initialUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((query) => {
    return initialUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Filter</h1>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
      {}
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

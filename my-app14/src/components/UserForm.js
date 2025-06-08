import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";

function UserForm(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (props.user) {
      setName(props.user.name);
      setStatus(props.user.status);
    }
  }, [props.user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || status.trim() === "") {
      alert("Пожалуйста, заполните оба поля.");
      return;
    }

    props.setUserInfo({ name: name.trim(), status: status.trim() });
  };

  return (
    <div className="user-form">
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">
            <strong>Name:</strong>
          </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="statusInput">
            <strong>Status:</strong>
          </label>
          <input
            id="statusInput"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Введите статус"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

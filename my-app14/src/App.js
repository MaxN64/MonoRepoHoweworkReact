
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";
import UserForm from "./components/UserForm";

import "./App.css"; 

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <User />

        <UserForm />
      </div>
    </Provider>
  );
}

export default App;

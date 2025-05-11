import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const MainPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;

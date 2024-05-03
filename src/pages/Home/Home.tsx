import React from "react";
import styles from "./home.module.css";
import Inputs from "../../components/inputs/Inputs";

const Home = () => {
  return (
    <div className={styles.home}>
      <Inputs />
    </div>
  );
};

export default Home;

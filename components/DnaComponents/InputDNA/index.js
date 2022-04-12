import React from "react";
import styles from "./styles.module.css";

function InputDNA() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Input</h1>
        <textarea className={styles.input} />
        <div className={styles.btn}>Submit</div>
      </div>
      <img className={styles.img} src="assets/Flask.svg" width="150"></img>
    </div>
  );
}

export default InputDNA;

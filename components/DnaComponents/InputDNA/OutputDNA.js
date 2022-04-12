import React from "react";
import styles from "./styles.module.css";

function OutputDNA() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <textarea disabled className={styles.input} />
        <div className={styles.btn}>Download</div>
      </div>
      <img className={styles.img} src="assets/Output.svg" width="150"></img>
    </div>
  );
}

export default OutputDNA;

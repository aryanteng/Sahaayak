import React from "react";
import styles from "./styles.module.css";

function OutputAlignment() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <p>Alignment Matrix</p>
            <div className={styles.matrix}></div>
          </div>
          <div className={styles.box}>
            <p>Optimal Alignments</p>
            <div className={styles.alignments}></div>
            <div className={styles.alignments}></div>
            <div className={styles.alignments}></div>
          </div>
        </div>
      </div>
      <img src="assets/Output.svg" width="150"></img>
    </div>
  );
}

export default OutputAlignment;

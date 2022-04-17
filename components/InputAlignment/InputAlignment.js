import React from "react";
import styles from "./styles.module.css";

function InputAlignment() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Input</h1>
        <div className={styles.inputSeq}>
          <p>Sequence A</p>
          <input className={styles.input}></input>
        </div>
        <div className={styles.inputSeq}>
          <p>Sequence B</p>
          <input className={styles.input}></input>
        </div>
        <div className={styles.penalties}>
          <div className={styles.inputSeq}>
            <p>Match</p>
            <input className={styles.smallInput}></input>
          </div>
          <div className={styles.inputSeq}>
            <p>Gap</p>
            <input className={styles.smallInput}></input>
          </div>
          <div className={styles.inputSeq}>
            <p>Mismatch</p>
            <input className={styles.smallInput}></input>
          </div>
        </div>
        <div className={styles.btn}>Submit</div>
      </div>
      <img className={styles.img} src="assets/Flask.svg" width="150"></img>
    </div>
  );
}

export default InputAlignment;

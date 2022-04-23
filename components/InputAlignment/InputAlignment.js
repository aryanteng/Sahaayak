import React from "react";
import styles from "./styles.module.css";

function InputAlignment({
  seqA,
  seqB,
  match,
  misMatch,
  gap,
  setSeqA,
  setSeqB,
  setMatch,
  setMisMatch,
  setGap,
  submit,
  error,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Input</h1>
        <div className={styles.inputSeq}>
          <p>Sequence A</p>
          <input
            className={styles.input}
            value={seqA}
            onChange={(e) => {
              setSeqA(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.inputSeq}>
          <p>Sequence B</p>
          <input
            className={styles.input}
            value={seqB}
            onChange={(e) => {
              setSeqB(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.penalties}>
          <div className={styles.inputSeq}>
            <p>Match</p>
            <input
              className={styles.smallInput}
              value={match}
              onChange={(e) => {
                setMatch(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.inputSeq}>
            <p>Gap</p>
            <input
              className={styles.smallInput}
              value={gap}
              onChange={(e) => {
                setGap(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.inputSeq}>
            <p>Mismatch</p>
            <input
              className={styles.smallInput}
              value={misMatch}
              onChange={(e) => {
                setMisMatch(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            submit();
          }}
        >
          Submit
        </div>
        {error ? (
          <p style={{ fontSize: "1rem", color: "var(--theme)" }}>{error}</p>
        ) : (
          ""
        )}
      </div>
      <img className={styles.img} src="assets/Flask.svg" width="150"></img>
    </div>
  );
}

export default InputAlignment;

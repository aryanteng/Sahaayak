import React, { useState } from "react";
import styles from "./styles.module.css";

function OutputAlignment({ matrix, original, optimal }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <p>Alignment Matrix</p>
            <div className={styles.matrix}>
              {matrix.map((item) => {
                matrix.map((index) => {
                  return <p style={{ fontSize: "1rem" }}>{item.index}</p>;
                });
              })}
            </div>
          </div>
          <div className={styles.box}>
            <p style={{ marginLeft: "1rem" }}>Optimal Alignments</p>
            {original ? (
              original.map((item, index) => {
                return (
                  <div className={styles.alignments}>
                    {item}
                    <br></br>
                    {optimal[index]}
                  </div>
                );
              })
            ) : (
              <div className={styles.alignments}></div>
            )}
          </div>
          <img className={styles.img} src="assets/Output.svg" width="150"></img>
        </div>
      </div>
    </div>
  );
}

export default OutputAlignment;

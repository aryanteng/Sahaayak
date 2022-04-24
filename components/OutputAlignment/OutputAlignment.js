import React, { useState } from "react";
import styles from "./styles.module.css";

function OutputAlignment({
  matrix,
  original,
  optimal,
  maxScore,
  seqA,
  seqB,
  isGlobal,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h1>Output</h1>
        <div className={styles.boxContainer}>
          <div className={styles.flexDiv}>
            <div className={styles.box}>
              <p style={{ marginLeft: "1rem" }}>Alignment Matrix</p>
              <div className={styles.matrix}>
                <table>
                  <tbody>
                    <tr>
                      <th
                        className={styles.tableHeading}
                        style={{ fontSize: "1rem" }}
                      >
                        {isGlobal ? "Global" : "Local"}
                      </th>
                      <th className={styles.tableHeading}> </th>
                      {seqA.split("").map((item, i) => (
                        <th className={styles.tableHeading} key={i}>
                          {item}
                        </th>
                      ))}
                    </tr>
                    {matrix.map((numList, i) => (
                      <tr key={i}>
                        {i < seqA.length - seqB.length ? (
                          <th className={styles.tableHeading}> </th>
                        ) : (
                          <th className={styles.tableHeading}>{seqB[i - 1]}</th>
                        )}

                        {numList.map((num, j) => (
                          <td
                            className={styles.tableItem}
                            key={j}
                            style={{
                              width: 65,
                              height: 65,
                              color: "#fff",
                              border: "2px solid var(--theme)",
                              textAlign: "center",
                              borderRadius: 5,
                            }}
                          >
                            {num}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginLeft: "1rem", marginTop: "-1rem" }}>
                Optimal Alignment Score : {maxScore}
              </p>
            </div>
            <div className={styles.box2} style={{ width: "50%" }}>
              <p className={styles.para}>Optimal Alignments</p>
              {original ? (
                original.map((item, index) => {
                  return (
                    <div className={styles.alignments} key={index}>
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
          </div>
          <img className={styles.img} src="assets/Output.svg" width="150"></img>
        </div>
      </div>
    </div>
  );
}

export default OutputAlignment;

import React from "react";
import styles from "./styles.module.css";

function Define({ topic, definition, link }) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{topic}</h1>
        <h3>{definition}</h3>
        <div className={styles.infoBox}>
          <p>Wish to learn more?</p>
          <a href={link} target="_blank">
            <p style={{ color: "var(--theme)" }}>Click Here</p>
          </a>
        </div>
      </div>
      <img className={styles.img} src="assets/Dna.svg" width="150"></img>
    </div>
  );
}

export default Define;

import React from "react";
import styles from "./styles.module.css";

function Define({ topic, definition, link }) {
  return (
    <div className={styles.container}>
      <h1>{topic}Global Alignment</h1>
      <h3>{definition}</h3>
      <p>
        To Know More
        <span>
          <a href={link}>
            <p className={styles.infoLink}>Click Here</p>
          </a>
        </span>
      </p>
    </div>
  );
}

export default Define;

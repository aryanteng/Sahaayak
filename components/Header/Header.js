import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Sahaayak</h1>
      <div className={styles.headerLinks}>
        <a>
          <p>Global</p>
        </a>
        <a>
          <p>Local</p>
        </a>
        <a>
          <p>End-Free</p>
        </a>
        <a>
          <p>DNA to Protein</p>
        </a>
        <a>
          <p>ORFs</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
